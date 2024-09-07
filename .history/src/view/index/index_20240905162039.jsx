import { React, useState } from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";
import Search from "@/components/search";
import CardItem from "@/components/Carditem";
import Footer from "@/components/Footer";
import { InfiniteScroll } from "antd-mobile";
const Index = () => {
  const [data, setData] = useState();
  const [hasMore, setHasMore] = useState(true);

  return (
    <div className="h-full p-2">
      <div className=" bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <Search />
        <CardItem
  avatarUrl="https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y"
  name="匿名"
  sex="male"
  time="2小时前"
  content="出一个【全新未安装】床帘 90*190*90cm 图案如下图 有人需要没 🎉"
/>
        
        <Footer />
        <InfiniteScroll/>
      </div>
    </div>
  );
};

export default Index;
