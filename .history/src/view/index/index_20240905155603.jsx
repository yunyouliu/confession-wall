import { React, useState } from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";
import Search from "@/components/search";
import Carditem from "@/components/Carditem";
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
        <Carditem />
        <Carditem />
        <Carditem />
        <Carditem />
        <Carditem />
        <Carditem />
        <Carditem />
        <Carditem />
        <Footer />
        <InfiniteScroll className="bg-gradient-to-r from-pink-200 via-purple-200" />
      </div>
    </div>
  );
};

export default Index;
