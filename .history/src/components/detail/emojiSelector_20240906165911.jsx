import React, { useState } from "react";
import { TextArea } from "antd-mobile";
import SvgIcon from "../SvgIcon";
const EmojiSelector = () => {
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
          src="https://img.qiqi.pro/mirror/gravatar/avatar/2ade0e9729c064caaf7b347193ce0251?s=40&d=retro&f=y"
          className="rounded-full w-8 h-8"
        />
        <span className="mt-2 ml-1">用户2054310</span>
      </div>
      {/*  */}
    </div>
  );
};

export default EmojiSelector;
