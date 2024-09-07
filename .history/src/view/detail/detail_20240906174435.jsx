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
  content: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉",
};

const Detail = () => {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;
  const handleCommentSubmit = (comment) => {
    console.log("发送的评论:", comment);
    // 在此可以处理评论的提交，比如通过 API 提交到服务器
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 h-full p-2 ">
      <span className="text-xs text-gray-500 float-right mt-[-6px]">
        点击右上角分享给好友↑
      </span>
      <div className="pr-1 mt-4">
        {/* 卡片内容 */}
        <CardItem
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
            {" "}
            <img src="https://img.qiqi.pro/x/clmqfna8t24eeuhuzk6ikf3kf.jpg?_s=1283x558" />
          </a>
        </div>
        {/* 评论列表 */}

        {/*  底部  */}
        <Footer/>
      </div>
    </div>
  );
};

export default Detail;
