/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 00:33:30
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-13 15:06:41
 */
import CardItem from "@/components/Carditem";
import Comment from "@/components/comment/Comment";
import { React, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import EmojiSelector from "@/components/detail/emojiSelector";
import Footer from "@/components/detail/footer";
import axios from "@/utils/http";
import { Image, SpinLoading, Toast } from "antd-mobile"; // 引入 Toast 提示组件

const Detail = () => {
  const [data, setData] = useState(null); // 初始数据为 null
  const [loading, setLoading] = useState(true); // 加载状态
  const location = useLocation(); // 获取路由的状态
  const state = location.state;
  const id = state?.userId || 1; // 如果 userId 不存在，则使用默认值 1
  const hasIncreasedViews = useRef(false); // 标记浏览量是否已增加

  //进入页面浏览量增加
  /**
   * @name:
   * @return {*}
   */
  const increaseViews = async () => {
    try {
      await axios.put(`/wall/essay/views/${id}`);
    } catch (error) {
      console.error("Error increasing views:", error);
    }
  };

  useEffect(() => {
    if (!hasIncreasedViews.current) {
      increaseViews(); // 调用浏览量增加函数
      hasIncreasedViews.current = true; // 标记为已增加
    }
  }, [id]); // 在 id 变化时仍可增加浏览量

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`/wall/essay/get/${id}`);
        if (res.status === 200) {
          setData(res.data.data);
        } else {
          throw new Error("数据获取失败");
        }
      } catch (error) {
        Toast.show({
          content: `数据加载失败: ${error.message}`,
          position: "bottom",
        });
      } finally {
        setLoading(false); // 停止加载
      }
    };

    fetchData(); // 请求数据
  }, [id]);

  useEffect(() => {
    // 路由变化时滚动到顶部
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen p-2 bg-gradient-to-r from-pink-200 via-purple-200">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SpinLoading color="primary" />
        </div>
      ) : data ? (
        <div className=" ">
          <span className="text-xs text-gray-500 float-right mt-[-9px] leading-none scale-2">
            点击右上角分享给好友↑
          </span>
          <div className="pr-1 mt-4">
            <CardItem
              userId={data.id}
              key={data.id}
              avatarUrl={data.avatarUrl}
              name={data.userName}
              sex={data.sex}
              time={data.time}
              content={data.content}
              likes={data.likes}
              views={data.views}
              comments={data.comments}
              section={data.section}
            />
            <div className="mt-4">
              <EmojiSelector
                sex={data.sex}
                name={data.name}
                avatarUrl={data.avatarUrl}
                type="2"
                rootId={0}
                eassyId={data.id}
              />
            </div>
            <div className="mt-4">
              <a href="https://mp.weixin.qq.com/s/MSKzIREICBiI43_bwkDg_g">
                <Image src="https://img.qiqi.pro/x/clmqfna8t24eeuhuzk6ikf3kf.jpg?_s=1283x558" />
              </a>
            </div>
            <div>
              <Comment id={id} />
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>无法加载数据，请稍后重试。</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
