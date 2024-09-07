import { React, useState } from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";
import Search from "@/components/search";
import Carditem from "@/components/Carditem";
import Footer from "@/components/Footer";

const Index=()=>{
  const [data, setData] = useState();
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    const append = (() => {})();
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }
  return (
    <div className="h-full p-2">
      <div className="h-full bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <Search />
        <Carditem />
        <Footer />
      </div>
    </div>
  );
}

export default Index;