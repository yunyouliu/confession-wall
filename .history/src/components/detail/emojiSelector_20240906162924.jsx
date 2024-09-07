import React, { useState } from "react";

  return (
    <div className="bg-[##ffffff]  p-4  shadow-md h-[150px] ">
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
    </div>
  );
};

export default EmojiSelector;
