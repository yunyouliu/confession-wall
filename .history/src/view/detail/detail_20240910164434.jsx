import CardItem from "@/components/Carditem";
import Comment from "@/components/comment/Comment";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmojiSelector from "@/components/detail/emojiSelector";
import Footer from "@/components/detail/footer";
import axios from "axios";

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
    text: "没人有义务帮你们部门完成任务，前面的广告没撤回也并没有说支持，都是一视同仁，你们部门的广告也并没有撤回，加上这样那样的原因，应该很多人对你们部门印象并不好，都是过来人，很反感这种任务，矛盾发生我觉得是必然，且本来就不是官方群，只是每年自愿帮学弟学妹入学解答而已，并不是一些组织拉大一干事建的群，本来就是一个我们自发的圈子，群里经常聊天的都是熟人，什么广告进来都会被骂两句，不合适的直接撤回，且群公告写的明白不能发，看别人发你就发？那你看别人做坏事你也做？自己部门的事自己完成，再不济每人交点部门费也好，外联部拉到赞助是让全校人都来你们凑经费的？你们什么总务中心的副部级干部22级马院法学一班徐*云，身为一名干部，出现的第一件事情不是想着怎么解决，缓和矛盾，而是进一步计划矛盾，我是不知道你怎么当上干部的，教你这样给小弟出头？你要是什么黑帮大哥二哥，那没问题，那是真义气，你要搞清楚你的身份，学生干部的本质是学生，学生之间发生矛盾你要想着怎么调解解决，而不是激化矛盾，双方都有问题，但是你们喜欢挂那就挂",
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
  const [data, setData] = useState([]);
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;
  console.log(state);
  const handleCommentSubmit = (comment) => {
    console.log("发送的评论:", comment);
    // 在此可以处理评论的提交，比如通过 API 提交到服务器
  };
  // useEffect(() => {
  //   const fechData = async () => {
  //     try {
  //       // 分页查询
  //       const res = await axios("/api/v1/post/list", {
  //         params: { page: 1, pageSize: 10 },
  //       });
  //       // console.log(res);
  //       setData(res.data.data);
  //     } catch (error) {
  //       console.log("数据获取失败",error.message);
  //     }
  //   };
  //   fechData();
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full  min-h-screen p-2">
      <div className="bg-gradient-to-r from-pink-200 via-purple-200  ">
        <span className="text-xs text-gray-500 float-right mt-[-9px]  leading-none scale-2">
          点击右上角分享给好友↑
        </span>
        <div className="pr-1 mt-4">
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
          <div>
            <Comment />
          </div>
          {/*  底部  */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
