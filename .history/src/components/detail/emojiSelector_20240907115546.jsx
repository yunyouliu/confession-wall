import React, { useState } from "react";
import { TextArea, Checkbox, Button } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "../SvgIcon";
import PropTypes from "prop-types";
import emojione from "emojione";
const EmojiSelector = ({ sex, name, avatarUrl }) => {
  const [checked, setchecked] = useState(false);
  const emoji = emojione.toShort(":smile:"); // 将表情符号转换为图片
  const emojiText = "I love coding! 😍👨‍💻";
  // 使用 emojione 转换 Emoji
  const convertedText = emojione.toImage(emojiText);
  return (
    <div className=" p-2 bg-[#fde5e9]  shadow-md  ">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 2, maxRows: 5 }}
        />
      </div>
      {emoji}
      <div className="flex items-center mt-4">
        <img src={avatarUrl} className="rounded-full w-8 h-8" />
        <span className="mt-2 ml-1">{name}</span>
        <SexIcon className="mt-[11px] ml-1" sex={sex} />
        <SvgIcon iconName="bianji" className="mt-[11px] ml-1" />
        <div className="ml-auto flex items-center h-2">
          <Checkbox
            checked={checked}
            onClick={() => setchecked(!checked)}
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
      {/*  */}
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
