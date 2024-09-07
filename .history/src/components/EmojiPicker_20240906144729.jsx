import { Picker } from 'emoji-mart'
import PropTypes from "prop-types";
import 'emoji-mart/css/emoji-mart.css'

const EmojiPicker = ({ onEmojiSelect }) => {
  return (
    <Picker onSelect={onEmojiSelect} />
  );
};

// 属性验证
EmojiPicker.propTypes = {
  onEmojiSelect: PropTypes.func.isRequired,
};
export default EmojiPicker;
