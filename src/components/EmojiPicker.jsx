/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-06 14:45:39
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:21:02
 */
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";

const EmojiPiker = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div>
      <InputEmoji
        className=""
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        language="zh"
        placeholder="想回点什么呢~"
      />
    </div>
  );
};

export default EmojiPiker;
