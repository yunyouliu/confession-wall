import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

const EmojiPicker = ({ onEmojiSelect }) => {
  return (
    <Picker onSelect={onEmojiSelect} />
  );
};

export default EmojiPicker;
