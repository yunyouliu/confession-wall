import React, { useState } from "react";
import { TextArea } from "antd-mobile";
const EmojiSelector = () => {
  return (
    <div className="bg-[##ffffff]  p-4  shadow-md  ">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 1, maxRows: 5 }}
        />
      </div>
      <div className="flex justify-between mt-4">
        
      </div>
      {/*  */}
    </div>
  );
};

export default EmojiSelector;
