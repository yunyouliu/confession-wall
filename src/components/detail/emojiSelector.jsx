/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-06 16:01:16
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-06 14:41:04
 */
import React, { useState, useRef, useEffect } from "react";
import {
  TextArea,
  Toast,
  Popup,
  List,
  ImageUploader,
  Image,
  SpinLoading,
} from "antd-mobile";
import PropTypes from "prop-types";
import jsonData from "../../assets/emoji.json"; // Emoji 数据
import Foot from "./foot"; // 评论底部操作组件
import axios from "axios"; // HTTP 请求库
import tabEmoji from "../../assets/tabEmoji.json"; // Tab 表情包数据
import { v4 as uuidv4 } from "uuid"; // 生成唯一标识符
import { useSelector, useDispatch } from "react-redux";
import { setFlag } from "@/redux/commentSlice"; // Redux action
import { useNavigate } from "react-router-dom";

// 设置最大输入字符数
const MAX_TEXT_LENGTH = 2000;

/**
 * EmojiSelector - 评论输入框组件，支持表情、图片上传及多种评论模式
 */
const EmojiSelector = ({
  sex, // 用户性别
  name, // 用户名
  avatarUrl, // 用户头像 URL
  type, // 评论类型（1：发帖，2：回复）
  postId, // 关联的帖子 ID
  rootId, // 根评论 ID
  eassyId, // 关联的文章 ID
  childId, // 子评论 ID
}) => {
  const [text, setText] = useState(""); // 输入的文本
  const [Visible, setVisible] = useState(false); // 控制弹窗显示
  const [loading, setLoading] = useState(false); // 控制加载状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 表情选择下拉框状态
  const textAreaRef = useRef(null); // 文本域引用
  const dropdownRef = useRef(null); // 表情下拉框引用
  const input = useRef(null); // 图片上传输入引用
  const [fileList, setFileList] = useState([]); // 选中的文件列表
  const [images, setImgages] = useState([]); // 图片数据
  const { id } = useSelector((state) => state.user); // 从 Redux 获取用户 ID
  const { flag, select, onlyComments, section, top } = useSelector(
    (state) => state.comment
  ); // 从 Redux 获取评论状态
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ossAxios = axios.create({
    timeout: 5000, // 可根据需要设置超时时间
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: false,
  });

  /**
   * 处理表情符号选择
   * @param {string} emoji - 被选择的表情符号
   */
  const handleEmojiSelect = (emoji) => {
    const newText = text + emoji;
    if (newText.length <= MAX_TEXT_LENGTH) {
      setText(newText);
    } else {
      Toast.show({ content: "字数超出限制！", position: "bottom" });
    }
  };

  /**
   * 在 flag 状态变更后自动提交评论
   */
  useEffect(() => {
    if (flag) {
      handleComment();
      dispatch(setFlag(false)); // 重置 flag
    }
  }, [flag]);

  /**
   * 提交评论逻辑
   */
  const handleComment = async () => {
    try {
      setLoading(true); // 开始加载

      let imgUrl = [];

      // 上传图片到 OSS，如果有图片
      if (images.length) {
        const uploadResults = await Promise.allSettled(
          images.map((item) => uploadToOss(item))
        );

        // 筛选成功上传的图片 URL
        imgUrl = uploadResults
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        const failedUploads = uploadResults.filter(
          (result) => result.status === "rejected"
        );

        if (failedUploads.length) {
          Toast.show({ content: "部分图片上传失败，请重试" });
          return;
        }
      }

      const postData = {
        userId: id,
        rootCommentId: rootId,
        postId,
        childId,
        display: select ? 1 : 0,
        content: { text, img: imgUrl },
      };

      if (type === "2") {
        postData.essayId = eassyId; // 设置文章 ID
      } else if (type === "1") {
        delete postData.childId;
        delete postData.rootCommentId;
        delete postData.postId;
        postData.onlyComments = onlyComments;
        postData.top = top;
        postData.section = section;
      }
      if (type === "1") {
        if (!postData.content.text.trim() && postData.content.img.length == 0) {
          Toast.show({ content: "请输入内容" });
          return
        }
      }
      const { data } = await axios.post(
        `${type === "1" ? "wall/essay/save" : "wall/commentform/comments"}`,
        postData
      );

      dispatch({ type: "tab/setVisible", payload: false });

      if (data.code === 200) {
        setText(""); // 重置输入框
        setImgages([]); // 清空图片
        setFileList([]); // 清空文件列表
        Toast.show({ content: type === "1" ? "发布成功" : "回复成功" });
        if (type === "1") {
          navigate("/index");
        } else {
          // 刷新页面
          window.location.reload();
          return
        }
      } else {
        Toast.show({ content: "error,请稍后再试" });
      }
    } catch (error) {
      Toast.show({ content: "提交失败，请检查网络" });
    } finally {
      setLoading(false); // 结束加载
    }
  };

  /**
   * 上传图片到 OSS
   * @param {File} file - 待上传的文件
   * @returns {string} - 上传成功的图片 URL
   */
  const uploadToOss = async (file) => {
    try {
      console.log(file);
      const stsResponse = await axios.get("/oss/policy");
      const { policy, signature, dir, accessid, host } = stsResponse.data.data;
      const fileExtension = file.name.split(".").pop();
      const uniqueFileName = `${uuidv4()}.${fileExtension}`;
      const url = `${host}/${dir}/${uniqueFileName}`;

      const formData = new FormData();
      formData.append("key", `${dir}/${uniqueFileName}`);
      formData.append("OSSAccessKeyId", accessid);
      formData.append("policy", policy);
      formData.append("signature", signature);
      formData.append("file", file);

      const OSSResponse = await ossAxios.post(host, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(url);
      if (OSSResponse.status === 200 || OSSResponse.status === 204) return url;
      throw new Error("上传失败");
    } catch (error) {
      console.error("上传文件失败:", error.message);
      throw error;
    }
  };

  /**
   * 图片预览逻辑
   */
  const handleImagePreview = async (file) => {
    await new Promise((resolve) => setTimeout(resolve, 800)); // 模拟加载
    return { url: URL.createObjectURL(file) };
  };

  const handSelect = (event) => {
    // 触发文件选择框
    const nativeInput = input.current?.nativeElement;
    // 触发点击事件
    if (nativeInput) {
      nativeInput.click();
    }
  };
  // 调用相机
  const handPhoto = () => {
    navigator.camera.getPicture(
      (imageData) => {
        // 处理图片数据
        const image = {
          uid: Date.now(),
          name: "image.jpg",
          status: "done",
          url: imageData,
        };
        setImgages([image]);
        setFileList([image]);
      },
      (error) => {
        // 处理错误
      }
    );
  };

  return (
    <div
      className={`p-2 ${type == "1" ? "" : "bg-[#fde5e9]"}  shadow-md relative`}
    >
      {/* 表情包选择框 */}
      <div className="bg-white rounded-md">
        <TextArea
          onClick={() => {
            setIsDropdownOpen(false);
          }}
          ref={textAreaRef}
          value={text}
          onChange={(val) => setText(val)}
          placeholder={type === "1" ? "想发点什么呢~" : "想回点什么呢~"}
          maxLength={MAX_TEXT_LENGTH}
          autoSize={{ minRows: type == "2" ? 1 : 3, maxRows: 5 }}
        />
        <div className="grid grid-cols-11 w-80 ml-2">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            onClick={() => setVisible(true)}
          >
            <use xlinkHref="#icon-xiangji" />
          </svg>
          {tabEmoji.map((emoji, index) => (
            <Image
              lazy
              className="w-6 h-6 mr-2 mb-2 cursor-pointer "
              src={emoji.url}
              key={index}
              alt={emoji.description}
              onClick={() => handleEmojiSelect(emoji.description)}
            />
          ))}

          {/* 表情包下拉框 */}
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <svg className="w-6 h-6" aria-hidden="true">
              <use xlinkHref="#icon-xiaolian" />
            </svg>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs p-2 bg-white rounded shadow-lg"
              >
                <div className="grid grid-cols-8 gap-2 h-40 overflow-auto">
                  {jsonData.map((emoji, index) => (
                    <img
                      className="w-6 h-6 cursor-pointer"
                      src={emoji.url}
                      key={index}
                      alt={emoji.name}
                      onClick={() => handleEmojiSelect(emoji.description)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 图片上传 */}
        <div className="justify-center items-center text-[#999999] p-2">
          <ImageUploader
            columns={3}
            ref={input}
            maxCount={9}
            value={fileList}
            onDelete={(file) => {
              setFileList(fileList.filter((item) => item !== file));
              setImgages(fileList.filter((item) => item !== file));
            }}
            onChange={(files) => {
              setVisible(false);
              setFileList(files);
            }}
            upload={async (file) => {
              // 这里可以直接调用上传逻辑
              setVisible(false);
              setImgages((prev) => [...prev, file]);
              return handleImagePreview(file); // 调用 handleImagePreview 以返回 URL
            }}
          >
            <div
              className={`w-[80px] h-[80px] bg-[#f5f5f5] p-2 mx-2 mt-3 justify-center items-center text-[#999999] ${fileList.length > 0 ? "" : "hidden"
                }`}
            >
              <svg className="w-8 h-8 ml-4" aria-hidden="true">
                <use xlinkHref="#icon-xiangji" />
              </svg>
              选择图片(最多9张)
            </div>
          </ImageUploader>
        </div>
      </div>

      {/* loading */}
      {loading && (
        <div className="loading-overlay">
          <SpinLoading color="primary" />
        </div>
      )}

      {/* 相册选择 */}
      <Popup
        visible={Visible}
        onMaskClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
      >
        <div className="items-center text-center">
          <List>
            <List.Item onClick={handPhoto}>拍摄</List.Item>
            <List.Item onClick={handSelect}>从相册选择</List.Item>
            <List.Item onClick={() => setVisible(false)}>取消</List.Item>
          </List>
        </div>
      </Popup>

      {/* 页脚 */}
      {type == "2" && (
        <Foot
          type={2}
          sex={sex}
          className=""
          name={name || "匿名"}
          avatarUrl={avatarUrl}
          handleComment={handleComment}
        />
      )}
    </div>
  );
};

EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]),
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  rootId: PropTypes.number,
  eassyId: PropTypes.number,
  postId: PropTypes.number,
  childId: PropTypes.number,
};

export default EmojiSelector;
