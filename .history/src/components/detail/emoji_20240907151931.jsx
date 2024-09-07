import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React from "react";
import PropTypes from "prop-types";

const Emoji = ({ onEmojiSelect }) => {
  return (
    <div
      className="mt-2 overflow-auto transition-all"
      style={{ maxHeight: "200px" }} // 设置最大高度
    >
      <Picker
        data={data}
        onEmojiSelect={onEmojiSelect}
        previewPosition="none"
        skinTonePosition="none"
        categories={["people", "nature", "foods", "activity"]}
        navPosition="none"
        searchPosition="none"
      />
    </div>
  );
};
// 属性验证
Emoji.propTypes = {
  onEmojiSelect: PropTypes.func.isRequired,
};

export default Emoji;
