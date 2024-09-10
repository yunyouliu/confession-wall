import { React, useState } from "react";
import { Tabs } from "antd-mobile";

const Data = [
    {
      id: 1,
      avatarUrl:
        "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
      name: "浪漫小卖部🏠",
      sex: "male",
      section: "吐槽",
      time: "2天前",
      like: 0,
      views: 200,
      comments: 4,
      content: {
        text: "大家对摄影感兴趣的话可以来我们学校自己组建的摄影小屋哈[宕机]，留下你们的地球号",
        img: [
          "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
          "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
          "https://img.qiqi.pro/x/cm0s8aqkl1jrdz1tcbbxh6db2.jpeg?_s=2311x4110",
          "https://img.qiqi.pro/x/cm0s8ahdi1jqzz1tcek208nsd.jpeg?_s=2311x4110",
          "https://img.qiqi.pro/x/cm0s8alav1jr5z1tcc4r35vlp.jpeg?_s=2354x4186",
          "https://img.qiqi.pro/x/cm0s8aios1jr1z1tc8o1z8apa.jpeg?_s=2433x4327",
          "https://img.qiqi.pro/x/cm0s8ak561jr3z1tc84pg1fsk.jpeg?_s=2433x4327",
          "https://img.qiqi.pro/x/cm0s8amiz1jr7z1tc70vvhbo0.jpeg?_s=2495x4438",
          "https://img.qiqi.pro/x/cm0s8amiz1jr7z1tc70vvhbo0.jpeg?_s=2495x4438",
        ],
      },
    },
    {
      id: 2,
      avatarUrl:
        "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
      name: "匿名",
      sex: "female",
      section: "说说",
      time: "2小时前",
      like: 2,
      comments: 4,
      views: 1200,
      content: {
        text: "拒绝emo，请你看海边的日落和晚霞🎉[看]",
        img: [
          "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
          "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
        ],
      },
    },
    {
      id: 3,
      avatarUrl:
        "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
      name: "匿名",
      sex: "male",
      section: "推广",
      time: "3小时前",
      like: 16,
      comments: 18,
      views: 120,
      content: {
        text: "拒绝emo，请你看海边的日落和晚霞🎉[看]",
        img: [
          "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
        ],
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
    </div>
  );
};

export default Comment;
