import { Picker } from 'emoji-mart'
import PropTypes from "prop-types";
import 'emoji-mart/css/emoji-mart.css'

const EmojiPicker = ({ onEmojiSelect }) => {
  return (
    <Picker onSelect={onEmojiSelect} />
  );
};

EmojiPicker.prototypes = {
  onEmojiSelect: PropTypes.func.isRequired,
};

export default EmojiPicker;
