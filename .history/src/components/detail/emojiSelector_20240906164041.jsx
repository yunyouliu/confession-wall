import React, { useState } from "react";
import {TextArea} from "antd-mobile";
const EmojiSelector = () => {
  return (
    <div className="bg-[##ffffff]  p-4  shadow-md h-[150px] ">
      {/* 输入框 */}
      <div>
      <TextArea
          
          showCount
          maxLength={2000}
        />
      </div>

      {/*  */}
    </div>
  );
};

export default EmojiSelector;