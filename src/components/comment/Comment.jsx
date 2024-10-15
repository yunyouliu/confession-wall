import { React, useState, useEffect } from "react";
import { CapsuleTabs } from "antd-mobile";
import CommentItem from "./CommentItem";
import axios from "axios";
import PropTypes from "prop-types";
const Data = [
  {
    id: 1,
    userId: 1,
    avatarUrl:
      "https://img.qiqi.pro/x/clj5x8r0800i6xaf5917gkjqg.jpeg?_s=200x200",
    name: "浪漫小卖部🏠",
    sex: "male",
    display: true,
    time: "2天前",
    likes: 0,
    views: 200,
    content: {
      text: "大家对摄影感兴趣的话可以来我们学校自己组建的摄影小屋哈[宕机]，留下你们的地球号",
      img: [],
    },
    child: [
      {
        id: 2,
        userId: 2,
        postId: 1,
        display: true,
        toname: "匿名(1号)",
        tosex: "male",
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
      {
        id: 3,
        userId: 2,
        postId: 1,
        display: true,
        toname: "匿名(1号)",
        tosex: "male",
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
    id: 4,
    userId: 3,
    avatarUrl: "https://img.qiqi.pro/x/anonymous-avatar.jpg",
    name: "匿名",
    display: false,
    sex: "female",
    time: "2天前",
    likes: 0,
    content: {
      text: "深圳红树林公园",
      img: [],
    },
  },
];

const Comment = ({ id }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios(`/wall/commentform/list/tree/${id}`);
        setData(data.data);
        setActiveTab(data.data);
      };

      fetchData();
    } catch (error) {
      console.error("数据获取失败:", error.message);
    }
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <div className="mt-4 bg-white rounded-lg w-[90%]  mx-auto">
          <CapsuleTabs>
            <CapsuleTabs.Tab title="最新评论" key="0" />
            <CapsuleTabs.Tab title="最早评论" key="1" />
          </CapsuleTabs>
        </div>
      )}

      <div className="p-4">
        {data.map((iten, index) => {
          return <CommentItem idx={id} key={index} child={iten.children} {...iten}  />;
        })}
      </div>
    </div>
  );
};

// 属性验证
Comment.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Comment;
