import React, { useState, useRef, useEffect } from "react";
import { TextArea, Checkbox, Button, Toast, Popup, List } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "../SvgIcon";
import PropTypes from "prop-types";
import jsonData from "../../assets/emoji.json";

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
  const [checked, setChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 控制下拉框状态
  const textAreaRef = useRef(null); // 引用输入框的 DOM 节点
  const dropdownRef = useRef(null); // 引用下拉框 DOM 节点

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
        <div className="bg-black text-white">
          <List>
            <List.Item>拍摄</List.Item>
            <List.Item>从相册选择</List.Item>
          </List>
        </div>
      </Popup>

      {/* 图片展示 */}
      <div className="flex flex-wrap justify-center"></div>
      {/* 底部栏 */}
      <div className="flex items-center mt-4">
        <img src={avatarUrl} className="rounded-full w-6 h-6" alt="avatar" />
        <span className="mt-2 ml-1">{name}</span>
        <SexIcon className="mt-[11px] ml-1" sex={sex} />
        <SvgIcon iconName="bianji" className="mt-[11px] ml-1" />
        <div className="ml-auto flex items-center h-2">
          <Checkbox
            checked={checked}
            onClick={() => setChecked(!checked)}
            className="mt-1"
          >
            <span className="text-sm text-gray-500 ml-[-4px]">
              {checked ? "已匿名" : "可匿名"}
            </span>
          </Checkbox>
          <Button color="success" className="rounded-3xl h-8 ml-2 px-4">
            评论
          </Button>
        </div>
      </div>
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
