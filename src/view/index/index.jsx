import { React, useState, useEffect, useCallback, useRef } from "react";
import NavBar from "@/components/index/NavBar";
import TabBar from "@/components/index/TabBar";
import Search from "@/components/index/search";
import CardItem from "@/components/Carditem";
import Footer from "@/components/index/Footer";
import { InfiniteScroll, Toast } from "antd-mobile";
import axios from "axios";
import { useSelector } from "react-redux";
import "../../App.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [Carousel, setCarousel] = useState([]); // 轮播图
  const [total, setTotal] = useState([]) // 总数
  const [query, setQuery] = useState("");
  const loadingRef = useRef(false); // 用 ref 管理 loading 状态
  const pageRef = useRef(1); // 页码 ref 避免异步问题
  const { section, tab } = useSelector((state) => state.tab);

  // 加载更多数据
  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return; // 避免并发请求和重复加载

    loadingRef.current = true; // 标记为正在加载
    Toast.show({ content: "加载中...", position: "bottom", duration: 500 });
    try {
      const response = await axios.get("/wall/essay/post/list", {
        params: {
          page: pageRef.current,
          pageSize: 10,
          section,
          tab,
          query,
        },
      });

      const newData = response.data.data || [];
      if (newData.length < 10) {
        setHasMore(false); // 如果数据不足，标记无更多数据
        Toast.show({ content: "没有更多帖子啦~", position: "bottom" });
      }

      setData((prevData) => {
        const uniqueData = newData.filter(
          (newItem) => !prevData.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prevData, ...uniqueData];
      });

      pageRef.current += 1; // 成功请求后再递增页码
    } catch (error) {
      Toast.show({
        content: "加载失败：" + error.message,
        position: "bottom",
      });
    } finally {
      loadingRef.current = false; // 加载完成后解锁
    }
  }, [hasMore, section, tab, query]);

  // 当 section、tab 或 query 变化时重新加载数据
  useEffect(() => {
    const fetchData = async () => {
      setData([]); // 重置数据
      setHasMore(true); // 重置 hasMore 状态
      pageRef.current = 1; // 重置页码
      await loadMore(); // 加载第一页数据
    };

    fetchData();
  }, [section, tab, query]);

  useEffect(() => {
    // 获取轮播图
    const fetchData = async () => {
      const [total, Carousel] = await Promise.all([
        axios("/wall/user/seletetotal"),
        axios("/wall/carousel/carousel"),
      ]);
      setTotal(total.data.data);
      setCarousel(Carousel.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-2 bg-gradient-to-r from-pink-200 via-purple-200 min-h-screen">
      <NavBar img={Carousel} total={total} />
      <TabBar img={Carousel} />
      <Search query={query} change={setQuery} />
      {data.map((item) => (
        <CardItem
          userId={item.id}
          key={item.id}
          avatarUrl={item.avatarUrl}
          name={item.userName}
          sex={item.sex}
          time={item.time}
          content={item.content}
          likes={item.likes}
          views={item.views}
          comments={item.comments}
          section={item.section}
        />
      ))}
      <InfiniteScroll hasMore={hasMore} loadMore={loadMore} threshold={250} />

      {/* 底部文字部分 */}
      <div className="relative">
        <div
          className={`h-9 -mr-2 -ml-2 mt-5 bg-slate-100 p-2 -mb-3 ${data.length === 0 ? "fixed bottom-16 left-0 w-full" : ""}`}
        >
          本服务由公众号 口袋青年 提供
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
