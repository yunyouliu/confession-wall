import React, { useState, useEffect, useCallback, useRef } from "react";
import { CapsuleTabs, InfiniteScroll, DotLoading } from "antd-mobile";
import CommentItem from "./CommentItem";
import axios from "axios";
import PropTypes from "prop-types";

const Comment = ({ id }) => {
  const [activeTab, setActiveTab] = useState(0); // Tab 状态
  const [data, setData] = useState([]); // 评论数据
  const [hasMore, setHasMore] = useState(true); // 是否有更多数据
  const pageRef = useRef(1); // 用 useRef 管理页码
  const isLoadingRef = useRef(false); // 加载状态标志

  // 获取评论数据的函数
  const loadMore = useCallback(async () => {
    if (isLoadingRef.current) return; // 避免重复请求
    isLoadingRef.current = true;

    try {
      const response = await axios.get(`/wall/commentform/list/tree/${id}`, {
        params: { pagesize: 10, page: pageRef.current },
      });
      const fetchedData = response.data.data;

      // 判断是否还有更多数据
      setHasMore(fetchedData.length >= 10);

      // 合并数据，防止覆盖
      setData((prev) => [...prev, ...fetchedData]);
      pageRef.current += 1; // 页码递增
    } catch (error) {
      console.error("数据获取失败:", error.message);
      setHasMore(false);
    } finally {
      isLoadingRef.current = false; // 解锁
    }
  }, [id]);

  // 初次加载第一页数据
  useEffect(() => {
    pageRef.current = 1; // 确保从第一页开始
    loadMore();
  }, []);

  const InfiniteScrollContent = (hasMore) => {
    return (
      <>
        {!hasMore ? (
          <>
            <span>Loading</span>
            <DotLoading />
          </>
        ) : null}
      </>
    );
  };

  return (
    <div>
      {data.length > 0 && (
        <div className="mt-4 bg-white rounded-lg w-[90%] mx-auto">
          <CapsuleTabs
            activeKey={String(activeTab)}
            onChange={(key) => setActiveTab(Number(key))}
          >
            <CapsuleTabs.Tab title="最新评论" key="0" />
            <CapsuleTabs.Tab title="最早评论" key="1" />
          </CapsuleTabs>
        </div>
      )}

      <div className="p-4">
        {data.map((item) => (
          <CommentItem idx={id} key={item.id} child={item.children} {...item} />
        ))}

        {/* InfiniteScroll 组件 */}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} >
          <InfiniteScrollContent hasMore={hasMore} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

// 属性验证
Comment.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Comment;
