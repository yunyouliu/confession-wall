import { React, useState, useEffect, useCallback } from "react";
import NavBar from "@/components/index/NavBar";
import TabBar from "@/components/index/TabBar";
import Search from "@/components/index/search";
import CardItem from "@/components/Carditem";
import Footer from "@/components/index/Footer";
import { InfiniteScroll } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import { Toast } from "antd-mobile";
import { useSelector } from "react-redux";

const Index = () => {
  const [data, setData] = useState([]); // 初始数据为空数组
  const [hasMore, setHasMore] = useState(true); // 是否还有更多数据
  const [page, setPage] = useState(1); // 当前页码
  const [pageSize] = useState(10); // 每页加载数量
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // 是否正在加载
  const navigate = useNavigate();
  const { section, tab } = useSelector((state) => state.tab);
  const { id } = useSelector((state) => state.user);

  // 加载更多数据的函数
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return; // 如果正在加载或没有更多数据则停止请求

    setLoading(true); // 开始加载数据
    try {
      const response = await axios("/wall/essay/post/list", {
        params: { page, pageSize, section, tab, id, query },
      });
      const newData = response.data.data || [];

      // 如果加载的数据少于 `pageSize`，说明没有更多数据
      if (newData.length < pageSize) {
        setHasMore(false); // 停止加载更多
      }

      // 避免重复添加相同的数据
      setData((prevData) => {
        const uniqueData = newData.filter(
          (newItem) => !prevData.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prevData, ...uniqueData];
      });
      9;
      setPage((prevPage) => prevPage + 1); // 更新页码
    } catch (error) {
      console.error("加载数据失败：", error);
      Toast.show({ content: "加载数据失败" + error.message });
      setHasMore(false); // 发生错误时停止加载
    } finally {
      setLoading(false); // 数据加载完成
    }
  }, [hasMore, loading, page, pageSize, id, query, section, tab]);

  // // 初始加载第一页数据
  // useEffect(() => {
  //   loadMore(); // 加载第一页数据
  // }, [loadMore]); // 确保 useEffect 只在 loadMore 改变时执行

  useEffect(() => {
    const fetchData = async () => {
      setData([]); // 重置数据
      setPage(1); // 重置页码
      setHasMore(true); // 重新加载时设置为有更多数据
      await loadMore(); // 加载第一页数据
    };

    fetchData(); // 调用 fetchData
  }, [section, tab]); // 确保在 section 和 tab 变化时重新加载

  return (
    <div className="h-full p-2">
      <div className="bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <Search query={query} change={setQuery} />
        {data.length ? (
          data.map((item) => (
            <CardItem
              userId={item.id}
              key={item.id}
              avatarUrl={item.avatarUrl}
              name={item.name}
              sex={item.sex}
              time={item.time}
              content={item.content}
              likes={item.likes}
              views={item.views}
              comments={item.comments}
              section={item.section}
            />
          ))
        ) : (
          <p>Loading...</p> // 数据加载时的占位符
        )}
        <Footer />
        <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
      </div>
    </div>
  );
};

export default Index;
