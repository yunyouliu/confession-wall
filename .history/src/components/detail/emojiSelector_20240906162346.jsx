import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
const EmojiSelector = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="bg-[##ffffff]  p-4  shadow-md h-[150px] ">
      <div>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          language="zh"
          placeholder="想回点什么呢？"
        />
      </div>
    </div>
  );
};

export default EmojiSelector;
