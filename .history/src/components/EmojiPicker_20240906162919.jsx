
import InputEmoji from "react-input-emoji";
import React from 'react'

export default function EmojiPicker() {
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


</div>