import { React, useState } from "react";
import { Tabs } from "antd-mobile";
import CommentItem from "./CommentItem";

const Data = [
  {
    id: 1,
    userId: 1,
    avatarUrl:
      "https://img.qiqi.pro/x/clj5x8r0800i6xaf5917gkjqg.jpeg?_s=200x200",
    name: "浪漫小卖部🏠",
    sex: "male",
    section: "吐槽",
    time: "2天前",
    likes: 0,
    views: 200,
    content: {
      text: "大家对摄影感兴趣的话可以来我们学校自己组建的摄影小屋哈[宕机]，留下你们的地球号",
      img: [],
    },
    Children: [
      {
        id: 2,
        userId: 2,
        avatarUrl:
          "https://img.qiqi.pro/mirror/gravatar/avatar/d80ba88d6f02c25eda3ea31a80ce7ef5?s=40&d=retro&f=y",
        name: "用户2131974",
        sex: "male",
        likes: 0,
        time: "2天前",
        content: {
          text: "17773329623 [猪头]",
          img: [],
        },
      },
    ],
  },
  {
    id: 2,
    userId:3,
    avatarUrl: "https://img.qiqi.pro/x/anonymous-avatar.jpg",
    name: "匿名",
    sex: "female",
    time: "2天前",
    likes: 0,
    content: {
      text: "深圳红树林公园",
      img: [],
    },
  },
];

const Comment = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="mt-4 bg-white rounded-lg w-[90%]  mx-auto">
        <Tabs>
          <Tabs.Tab title="最新评论" key="0" />
          <Tabs.Tab title="最早评论" key="1" />
        </Tabs>
      </div>

      <div className="p-4">
        {Data.map((iten, index) => {
          return <CommentItem key={index} {...iten} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
