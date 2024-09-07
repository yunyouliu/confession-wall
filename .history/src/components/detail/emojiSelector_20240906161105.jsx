import React, { useState } from 'react';  
import EmojiPicker from 'emoji-picker-react';  
  
const EmojiSelector = () => {  
  const [selectedEmoji, setSelectedEmoji] = useState(null);  
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
 
  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  const handleEmojiClick = (event, emojiObject) => {  
    setSelectedEmoji(emojiObject.emoji);  
  };  
  
  return (  
    <div>  
         <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setShowPicker(false)}
      />
      <button onClick={() => setShowPicker(!showPicker)}>表情</button>
      {showPicker && <Picker onEmojiClick={onEmojiClick} />}
    </div>  
  );  
};  
  
export default EmojiSelector;