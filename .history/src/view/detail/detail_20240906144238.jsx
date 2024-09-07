import CardItem from "@/components/Carditem";
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Input, Button, List, Avatar } from "antd-mobile";
import { LikeOutline, MessageOutline } from "antd-mobile-icons";

const Data = {
  id: 1,
  avatarUrl:
    "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
  name: "匿名",
  sex: "female",
  section: "吐槽",
  time: "5分钟前",
  like: 2,
  comments: 4,
  content: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉",
};

const Detail = () => {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "匿名(1号)",
      comment: "看完瓜了，这种算相互暴力...",
      likes: 0,
    },
    {
      id: 2,
      user: "匿名(2号)",
      comment: "要他删又不删，笑死我了...",
      likes: 0,
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleLike = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 h-full p-2">
      <span className="text-xs text-gray-500 float-right mt-[-6px]">
        点击右上角分享给好友↑
      </span>
      <div className="pr-1 mt-4">
 
      </div>
      <div style={{ padding: "10px" }}>
        {/* 卡片内容 */}
        <CardItem
          key={Data}
          avatarUrl={Data.avatarUrl}
          name={Data.name}
          sex={Data.sex}
          time={Data.time}
          content={Data.content}
          likes={Data.like}
          comments={Data.comments}
          section={Data.section}
        />

        {/* 评论列表 */}
        <List header="最新评论">
          {comments.map((comment) => (
            <List.Item
              key={comment.id}
              prefix={<Avatar src="https://via.placeholder.com/40" />}
              description={comment.comment}
              extra={<span onClick={() => {}}>👍 {comment.likes}</span>}
            >
              {comment.user}
            </List.Item>
          ))}
        </List>

        {/* 添加评论输入框 */}
        <div style={{ marginTop: "10px" }}>
          <Input
            placeholder="想回复点什么呢~"
            value={1}
            onChange={() => {}}
            clearable
          />
          <Button
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={() => {}}
          >
            评论
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
