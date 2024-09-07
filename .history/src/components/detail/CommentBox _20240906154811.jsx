import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd-mobile"; // 引入 Ant Design 的组件
import {data} from "@emoji-mart/data";
import {Picker} from "@emoji-mart/react";

const CommentBox = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(true);

  // 添加表情到输入框
  const addEmoji = (emoji) => {
    setComment(comment + emoji.native);
  };

  // 处理评论发送
  const handleSubmit = () => {
    if (comment.trim()) {
      onCommentSubmit(comment);
      setComment(""); // 发送后清空输入框
    }
  };

  return (
    <div className="comment-box">
      <div className="input-container">
        {/* 输入框 */}
        <Input.TextArea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="写下你的评论..."
          className="comment-input"
        />
      </div>

      <div className="emoji-container">
        {/* 切换表情选择器的显示 */}
        <Button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</Button>

        {/* 表情选择器 */}
        {showEmojiPicker && <Picker data={data} onEmojiSelect={console.log} />}
      </div>

      <div className="submit-button">
        {/* 发送评论按钮 */}
        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={!comment.trim()}
        >
          发送
        </Button>
      </div>
    </div>
  );
};
// 属性验证
CommentBox.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CommentBox;
