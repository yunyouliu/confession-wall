import React, { useState } from 'react';  
import EmojiPicker from 'emoji-picker-react';  
  
const EmojiSelector = () => {  
  const [selectedEmoji, setSelectedEmoji] = useState(null);  
  
  const handleEmojiClick = (event, emojiObject) => {  
    setSelectedEmoji(emojiObject.emoji);  
  };  
  
  return (  
    <div>  
      <h2>选择你的Emoji</h2>  
      <EmojiPicker onEmojiClick={handleEmojiClick} searchDisabled skinTonesDisabled />  
      <p>你选择的Emoji是: {selectedEmoji}</p>
    </div>  
  );  
};  
  
export default EmojiSelector;