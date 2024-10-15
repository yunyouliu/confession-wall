import React from "react";
import { useParams } from "react-router-dom";
import EmojiSelector from "@/components/detail/emojiSelector";
import Foot from "@/components/detail/foot";
import { List, Switch } from "antd-mobile";

const EassyPost = () => {
  const { id } = useParams();
  return (
    <div className="p-3 mt-7 rounded-lg h-full">
      {/* 头部 */}
      <EmojiSelector type="1" />

      {/* 内容 */}
      <div>
        <List>
          <List.Item></List.Item>
          <List.Item prefix="仅自己可评论" extra={<Switch/>} />
        </List>
      </div>

      {/* 底部 */}
      <div className="fixed bottom-1 h-14 left-0 right-0 bg-gray-400 overflow-hidden select-none">
        <Foot className="" />
      </div>
    </div>
  );
};

export default EassyPost;
