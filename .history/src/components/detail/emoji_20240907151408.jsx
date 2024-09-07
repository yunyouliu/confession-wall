import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React, { useState } from "react";

const Emoji = () => {
      // 输入框内容状态
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false); // 控制表情选择器显示隐藏

  // 处理 emoji 选择
  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji.native); // 将选中的表情符号插入到文本框中
  };
  return (
    <div>
      <div
        className="mt-2 overflow-auto transition-all"
        style={{ maxHeight: "200px" }} // 设置最大高度
      >
        <Picker
          data={data}
          onEmojiSelect={handleEmojiSelect}
          previewPosition="none"
          skinTonePosition="none"
          categories={["people", "nature", "foods", "activity"]}
          navPosition="none"
          searchPosition="none"
        />
      </div>
    </div>
  );
};
export default Emoji;
