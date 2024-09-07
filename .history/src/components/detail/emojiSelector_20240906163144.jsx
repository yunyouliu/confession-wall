import React, { useState } from "react";

const EmojiSelector = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="bg-[##ffffff]  p-4  shadow-md h-[150px] ">
      <div>
        
      </div>
    </div>
  );
};

export default EmojiSelector;
