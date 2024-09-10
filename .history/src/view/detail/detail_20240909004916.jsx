import CardItem from "@/components/Carditem";
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import EmojiSelector from "@/components/detail/emojiSelector";
import Footer from "@/components/detail/footer";

const Data = {
  id: 1,
  avatarUrl:
    "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
  name: "匿名",
  sex: "female",
  section: "吐槽",
  time: "5分钟前",
  like: 2,
  views: 1200,
  comments: 4,
  content: {
    text: "拒绝emo，请你看海边的日落和晚霞🎉[看][色]",
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
};

const Detail = () => {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;
  const handleCommentSubmit = (comment) => {
    console.log("发送的评论:", comment);
    // 在此可以处理评论的提交，比如通过 API 提交到服务器
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 h-full ">
      <span className="text-xs text-gray-500 float-right mt-[-20px] leading-none">
        点击右上角分享给好友↑
      </span>
      <div className="pr-1 mt-6">
        {/* 卡片内容 */}
        <CardItem
          userId={Data.id}
          key={Data}
          avatarUrl={Data.avatarUrl}
          name={Data.name}
          sex={Data.sex}
          time={Data.time}
          content={Data.content}
          likes={Data.like}
          views={Data.views}
          comments={Data.comments}
          section={Data.section}
        />

        {/* 添加评论输入框 */}
        <div className="mt-4">
          <EmojiSelector
            sex={Data.sex}
            name={Data.name}
            avatarUrl={Data.avatarUrl}
          />
        </div>
        <div className="mt-4">
          <a href="https://mp.weixin.qq.com/s/MSKzIREICBiI43_bwkDg_g">
            <img src="https://img.qiqi.pro/x/clmqfna8t24eeuhuzk6ikf3kf.jpg?_s=1283x558" />
          </a>
        </div>
        {/* 评论列表 */}

        {/*  底部  */}
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
