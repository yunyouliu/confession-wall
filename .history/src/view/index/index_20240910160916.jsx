import { React, useState, useEffect } from "react";
import NavBar from "@/components/index/NavBar";
import TabBar from "@/components/index/TabBar";
import Search from "@/components/index/search";
import CardItem from "@/components/Carditem";
import Footer from "@/components/index/Footer";
import { InfiniteScroll } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import "../../App.css";

const Data = [
  {
    id: 1,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "female",
    section: "吐槽",
    time: "5分钟前",
    like: 2,
    views: 200,
    comments: 4,
    content: {
      text: "拒绝emo，请你看海边的日落和晚霞🎉[看]",
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

const Index = () => {
  const [data, setData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;

  // useEffect(() => {
  //   const fechData = async () => {
  //     try {
  //       // 分页查询
  //       const res = await axios("/api/v1/post/list", {
  //         params: { page: 1, pageSize: 10 },
  //       });
  //       console.log(res);
  //       setData(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(state);
  //   if (state) {
  //     window.scrollTo(0, parseInt(state.id));
  //     localStorage.removeItem("currentScrollPosition");
  //   }
  // }, [state]);

  return (
    <div className="h-full p-2">
      <div className=" bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <Search />
        {Data.map((item) => {
          return (
            <CardItem
              userId={item.id}
              key={item.id}
              avatarUrl={item.avatarUrl}
              name={item.name}
              sex={item.sex}
              time={item.time}
              content={item.content}
              likes={item.like}
              views={item.views}
              comments={item.comments}
              section={item.section}
            />
            <ScrollRestoration />
          );
        })}
        <Footer />
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Index;
