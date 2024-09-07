import React, { useState,useEffect } from "react";
import { TextArea, Checkbox, Button } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "../SvgIcon";
import PropTypes from "prop-types";




const EmojiSelector = ({ sex, name, avatarUrl }) => {
  // 输入框内容状态
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  // 处理 emoji 选择
  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji.native); // 将选中的表情符号插入到文本框中
  };

  useEffect(() => {
    // 使用 fetch 加载 JSON 文件
    fetch('/path/to/your/output.json')
        .then(response => response.json()) // 将响应体转换为 JSON
        .then(data => setJsonData(data))   // 更新状态
        .catch(error => console.error('Error loading JSON:', error));
  }, []); // 空数组意味着这个副作用只会在组件挂载时执行一次

  return (
    <div className="p-2 bg-[#fde5e9] shadow-md">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          value={text}
          onChange={(val) => setText(val)}
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 2, maxRows: 5 }}
        />
      </div>


      <div>
        <img/>
      </div>

      <div className="flex items-center mt-4">
        <img src={avatarUrl} className="rounded-full w-8 h-8" alt="avatar" />
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
