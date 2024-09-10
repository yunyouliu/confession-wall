import { React, useState } from "react";
import "../../App.css";
import NavBar from "@/components/index/NavBar";
import TabBar from "@/components/index/TabBar";
import Search from "@/components/index/search";
import CardItem from "@/components/Carditem";
import Footer from "@/components/index/Footer";
import { InfiniteScroll } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    id:1,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "female",
    section: "吐槽",
    time: "5分钟前",
    like: 2,
    views:200,
    comments: 4,
    content: {
      text: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉[看]",
      img: [
        "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
        "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
        "https://img.qiqi.pro/x/cm0s8ahdi1jqzz1tcek208nsd.jpeg?_s=2311x4110",
      ],
    },
  },
  {
    id:2,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "female",
    section: "说说",
    time: "2小时前",
    like: 2,
    comments: 4,
    views:1200,
    content: {
      text: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉[看]",
      img: [
        "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
        "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
        "https://img.qiqi.pro/x/cm0s8ahdi1jqzz1tcek208nsd.jpeg?_s=2311x4110",
      ],
    },
  },
  {
    id:3,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "male",
    section: "推广",
    time: "3小时前",
    like: 16,
    comments: 18,
    views:120,
    content: {
      text: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉[看]",
      img: [
        "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
        "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
        "https://img.qiqi.pro/x/cm0s8ahdi1jqzz1tcek208nsd.jpeg?_s=2311x4110",
      ],
    },
  },
];

const Index = () => {
  const [data, setData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

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
              key={item}
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
          );
        })}
        <Footer />
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Index;
