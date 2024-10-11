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

// 设置最大字符数（包括表情符号）
const MAX_TEXT_LENGTH = 2000;
const EmojiSelector = ({ sex, name, avatarUrl }) => {
  const [text, setText] = useState("");
  const [Visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const textAreaRef = useRef(null);
  const dropdownRef = useRef(null);
  const input = useRef(null);
  const [fileList, setFileList] = useState([]);

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
  
  const upload=async(file)=>{
    const stsResponse = await axios("/oss/policy");
    console.log("STS Response:", stsResponse.data);

    const { policy, signature, dir, accessid, host } = stsResponse.data.data;
    console.log("Policy Data:", { policy, signature, dir, accessid, host });

    const formData = new FormData();
    formData.append("key", `${dir}/${file.name}`);
    formData.append("OSSAccessKeyId", accessid);
    formData.append("policy", policy);
    formData.append("signature", signature);
    formData.append("success_action_status", "200");
    formData.append("file", file);

    const ossResponse = await axios.post(host, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const url = `${host}/${dir}/${file.name}`;
    console.log("上传成功，文件 URL:", url);
    setFileList((prev) => [...prev, { url }]);
    return url;
  }

  const uploadToOss = async (file) => {
    // 延时3秒
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
      url: URL.createObjectURL(file),
    }
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
          placeholder="想回点什么呢~"
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
              setFileList(files);
              console.log(files)
            }}
            upload={uploadToOss}
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
      <Foot sex={sex} name={name} avatarUrl={avatarUrl} />
    </div>
  );
};

EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default EmojiSelector;
