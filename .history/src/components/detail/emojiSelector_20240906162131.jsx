import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
const EmojiSelector = () => {
  return (
    <div className="bg-[##ffffff]  p-4  shadow-md h-[150px] ">
      <div>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </div>
    </div>
  );
};

export default EmojiSelector;
