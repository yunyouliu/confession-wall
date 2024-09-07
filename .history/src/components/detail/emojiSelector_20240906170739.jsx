import React, { useState } from "react";
import { TextArea } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "../SvgIcon";
import PropTypes from "prop-types";
const EmojiSelector = ({ sex, name, avatarUrl }) => {
  return (
    <div className=" p-2 bg-[#fde5e9]  shadow-md  ">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 1, maxRows: 5 }}
        />
      </div>
      <div className="flex  mt-4">
        <img
          src={avatarUrl}
          className="rounded-full w-8 h-8"
        />
        <span className="mt-2 ml-1">{name}</span>
        <SexIcon className="mt-2 ml-1" sex={sex} />
        <SvgIcon iconName="bianji" className="mt-2 ml-1"/>
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
