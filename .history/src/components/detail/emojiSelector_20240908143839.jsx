import React, { useState, useRef, useEffect } from "react";
import { TextArea, Toast, Popup, List, ImageUploader } from "antd-mobile";
import PropTypes from "prop-types";
import jsonData from "../../assets/emoji.json";
import Foot from "./foot";

const data = [
  {
    description: "[看]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211607559dcc9ca9a.png",
  },
  {
    description: "[流泪]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211601408cebcaa10.png",
  },
  {
    description: "[求求了]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142716823ee1a7199.png",
  },
  {
    description: "[猪头]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211605253f12c17c3.png",
  },
  {
    description: "[偷笑]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/1823354067401bf7445.png",
  },
  {
    description: "[送心]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/242116223295fc5d347.png",
  },
  {
    description: "[躺平]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142718335e95f861e.png",
  },
  {
    description: "[宕机]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/182335428430e299cc3.png",
  },
  {
    description: "[尬笑]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211532837e07cb990.png",
  },
];

// 设置最大字符数（包括表情符号）
const MAX_TEXT_LENGTH = 2000;
const EmojiSelector = ({ sex, name, avatarUrl }) => {
  // 输入框内容状态
  const [text, setText] = useState("");
  const [Visible, setVisible] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 控制下拉框状态
  const textAreaRef = useRef(null); // 引用输入框的 DOM 节点
  const dropdownRef = useRef(null); // 引用下拉框 DOM 节点
  const input = useRef(null);
  const [fileList, setFileList] = useState([]);

  // 处理 emoji 选择
  const handleEmojiSelect = (emoji) => {
    if (textAreaRef.current) {
      // 计算插入新表情后文本的总长度
      const newText = text + emoji;
      if (newText.length <= MAX_TEXT_LENGTH) {
        setText(newText); // 将选中的表情符号插入到文本框中
        // textAreaRef.current.focus(); // 确保输入框自动获得焦点
      } else {
        // 超过字符限制的处理逻辑，例如提示用户
        Toast.show({ content: "字数超出限制！", position: "bottom" });
      }
    }
  };

  const handPhoto = () => {
    // 调用相机

  };

  // 上传图片
  const Upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file).append("name", "jjj");
    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Toast.show({ content: "上传成功！", position: "bottom" });
        return { url: result.url }; // 返回图片 URL
      } else {
        Toast.show({ content: "上传失败，请重试", position: "bottom" });
        return null;
      }
    } catch (error) {
      Toast.show({ content: "网络错误，上传失败", position: "bottom" });
      return null;
    }
  };

  //   处理文件上传
  const handleFileChange = async (files) => {
    const uploadedFiles = [];
    setVisible(false)
    for (let file of files) {
      const result = await Upload(file);
      if (result) {
        uploadedFiles.push({
          url: result.url,
        });
      }
    }

    setFileList(uploadedFiles);
  };

  const handSelect = (event) => {
    //  调用相册
    const nativeInput = input.current?.nativeElement
    if (nativeInput) {
      nativeInput.click()
    }
  };

  return (
    <div className="p-2 bg-[#fde5e9] shadow-md relative">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          onClick={() => {
            setIsDropdownOpen(false);
          }}
          ref={textAreaRef} // 绑定 ref
          value={text}
          onChange={(val) => setText(val)}
          placeholder="想回点什么呢~"
          // showCount
          maxLength={MAX_TEXT_LENGTH}
          autoSize={{ minRows: 1, maxRows: 5 }}
        />
        {/* 表情选择区域 */}
        <div className="grid grid-cols-11 w-80 ml-2">
          <svg
            className="w-6 h-6  "
            aria-hidden="true"
            onClick={() => {
              setVisible(true);
            }}
          >
            <use xlinkHref="#icon-xiangji" />
          </svg>

          {data.map((emoji, index) => (
            <img
              className="w-6 h-6 mr-2 mb-2 cursor-pointer"
              src={emoji.url}
              key={index}
              alt={emoji.description}
              onClick={() => handleEmojiSelect(emoji.description)}
            />
          ))}

          {/* 笑脸图标，点击时展开表情选择框 */}
          <div
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="cursor-pointer"
          >
            <svg className="w-6 h-6" aria-hidden="true">
              <use xlinkHref="#icon-xiaolian" />
            </svg>
          </div>
        </div>
        <div className="justify-center items-center text-[#999999] mx-2 p02">
          <ImageUploader
            columns={3}
            ref={input}
            value={fileList}
            onChange={handleFileChange}
            upload={Upload}
          >
            <div className="w-[80px] h-[80px] bg-[#f5f5f5] p-2  mx-2 mb-2  justify-center items-center text-[#999999]">
              <svg className="w-8 h-8 ml-4" aria-hidden="true">
                <use xlinkHref="#icon-xiangji" />
              </svg>
              选择图片(最多9张)
            </div>
          </ImageUploader>
        </div>
      </div>

      {/* 表情选择框 */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef} // 绑定 ref
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
      <Popup
        visible={Visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div className=" items-center text-center">
          <List>
            <List.Item onClick={handPhoto}>拍摄</List.Item>
            <List.Item onClick={handSelect}>从相册选择</List.Item>
            <List.Item
              onClick={() => {
                setVisible(false);
              }}
            >
              取消
            </List.Item>
          </List>
        </div>
      </Popup>

      {/* 图片上传 */}

      {/* 图片展示 */}
      <div className="flex flex-wrap justify-center"></div>
      {/* 底部栏 */}
      <Foot sex={sex} name={name} avatarUrl={avatarUrl} />
    </div>
  );
};

// 属性验证
EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default EmojiSelector;
