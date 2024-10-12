import React, { useState, useRef } from "react";
import {
  TextArea,
  Toast,
  Popup,
  List,
  ImageUploader,
  Image,
} from "antd-mobile";
import PropTypes from "prop-types";
import jsonData from "../../assets/emoji.json";
import Foot from "./foot";
import axios from "axios";
import tabEmoji from "../../assets/tabEmoji.json";
import { useSelector } from "react-redux";

// 设置最大字符数（包括表情符号）
const MAX_TEXT_LENGTH = 2000;
const EmojiSelector = ({ sex, name, avatarUrl, type }) => {
  const [text, setText] = useState("");
  const [Visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const textAreaRef = useRef(null);
  const dropdownRef = useRef(null);
  const input = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [images, setImgages] = useState([]);
  const { id } = useSelector((state) => state.user);

  const handleEmojiSelect = (emoji) => {
    if (textAreaRef.current) {
      const newText = text + emoji;
      if (newText.length <= MAX_TEXT_LENGTH) {
        setText(newText);
      } else {
        Toast.show({ content: "字数超出限制！", position: "bottom" });
      }
    }
  };

  const handPhoto = () => {
    // 调用相机
  };

  // 提交评论时的处理逻辑
  const handleComment = async (val) => {
    try {
      let uploadedFiles = [];
      if (images.length) {
        uploadedFiles = Promise.all(
          images.map((item) => uploadToOss(item.file)) // 确保传入的是 item.file
        );
      }
      let imgUrl = [];
      await uploadedFiles.then((result) => {
        imgUrl = result;
      });
      const { res } = await axios.post("/api/comment", {
        text,
        id,
        display: val ? 1 : 0,
        images: imgUrl,
      });
      if (res.code === 200) {
        console.log("评论成功");
      } else {
        console.log("评论失败");
      }
    } catch (error) {
      console.error("评论提交失败：", error);
    }
  };

  // 保持原有的上传函数
  const uploadToOss = async (file) => {
    try {
      const stsResponse = await axios.get("/oss/policy");
      const { policy, signature, dir, accessid, host } = stsResponse.data.data;
      const url = `${host}/${dir}/${file.name}`;
      console.log(url);
      const formData = new FormData();
      formData.append("key", `${dir}/${file.name}`);
      formData.append("OSSAccessKeyId", accessid);
      formData.append("policy", policy);
      formData.append("signature", signature);
      formData.append("success_action_status", "200");
      formData.append("file", file);

      const OSSResponse = await axios.post(host, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: undefined, // 显式地设置为 undefined
        },
        withCredentials: false,
      });
      if (OSSResponse.status === 200) {
        return { url };
      } else {
        return { error: "上传失败" };
      }
    } catch (error) {
      console.error("上传文件失败:", error.message);
      return;
    }
  };

  //
  const FilelistChange = (files) => {
    setFileList(files);

    setImgages(
      // 保留 images 和filelist 中url相同的
      images.filter((img) => {
        return fileList.map((f) => f.url === img.url);
      })
    );
  };

  // 用于选择图片时预览
  const handleImagePreview = (file) => {
    let url = URL.createObjectURL(file);
    // 添加file进去file
    setImgages((prevFiles) => [...prevFiles, { file, url }]);
    return { url };
  };

  const handSelect = (event) => {
    const nativeInput = input.current?.nativeElement;
    if (nativeInput) {
      nativeInput.click();
    }
  };

  return (
    <div className="p-2 bg-[#fde5e9] shadow-md relative">
      <div className="bg-white rounded-md">
        <TextArea
          onClick={() => {
            setIsDropdownOpen(false);
          }}
          ref={textAreaRef}
          value={text}
          onChange={(val) => setText(val)}
          placeholder={type === "1" ? "想说点什么呢~" : "想回点什么呢~"}
          maxLength={MAX_TEXT_LENGTH}
          autoSize={{ minRows: 1, maxRows: 5 }}
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
              className="w-6 h-6 mr-2 mb-2 cursor-pointer"
              src={emoji.url}
              key={index}
              alt={emoji.description}
              onClick={() => handleEmojiSelect(emoji.description)}
            />
          ))}
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
        <div className="justify-center items-center text-[#999999] p-2">
          <ImageUploader
            columns={3}
            ref={input}
            value={fileList}
            onChange={(files) => {
              setVisible(false);
              FilelistChange(files);
            }}
            upload={async (file) => {
              // 这里可以直接调用上传逻辑
              return handleImagePreview(file); // 调用 handleImagePreview 以返回 URL
            }}
          >
            <div
              className={`w-[80px] h-[80px] bg-[#f5f5f5] p-2 mx-2 mt-3 justify-center items-center text-[#999999] ${
                fileList.length > 0 ? "" : "hidden"
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
      <Foot
        sex={sex}
        name={name}
        avatarUrl={avatarUrl}
        handleComment={handleComment}
      />
    </div>
  );
};

EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default EmojiSelector;
