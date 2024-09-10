
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";

  
const EmojiSelector = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div><div>
    <InputEmoji
    className=""
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      language="zh"
      placeholder="想回点什么呢~"
    /></div>
  )
}
