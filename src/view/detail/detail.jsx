import CardItem from "@/components/Carditem";
import Comment from "@/components/comment/Comment";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmojiSelector from "@/components/detail/emojiSelector";
import Footer from "@/components/detail/footer";
import axios from "@/utils/http";
import { Image, SpinLoading } from "antd-mobile"; // 引入 SpinLoading 组件

const Detail = () => {
  const [data, setData] = useState(null); // 修改为 null，初始没有数据
  const [loading, setLoading] = useState(true); // 增加加载状态
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;
  const id = state.userId;
  const handleCommentSubmit = (comment) => {
    console.log("发送的评论:", comment);
    // 在此可以处理评论的提交，比如通过 API 提交到服务器
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 查询数据
        const res = await axios(`/wall/essay/get/${id}`);
        if (res.status === 200) {
          setData(res.data.data);
          setLoading(false); // 数据加载完成后设置 loading 为 false
        } else {
          console.log("数据获取失败");
        }
      } catch (error) {
        console.log("数据获取失败", error.message);
        setLoading(false); // 即使失败也需要停止 loading
      }
    };
    fetchData();
  }, [state]);

  useEffect(() => {
    // 仅在路由发生变化时滚动到顶部
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen p-2">
      {loading ? ( // 如果数据正在加载，显示加载提示
        <div className="flex justify-center items-center h-screen">
          <SpinLoading color="primary" />
        </div>
      ) : (
        <div className="bg-gradient-to-r from-pink-200 via-purple-200">
          <span className="text-xs text-gray-500 float-right mt-[-9px] leading-none scale-2">
            点击右上角分享给好友↑
          </span>
          <div className="pr-1 mt-4">
            {/* 卡片内容 */}
            <CardItem
              userId={data.id}
              key={data.id} // 使用唯一的 key
              avatarUrl={data.avatarUrl}
              name={data.name}
              sex={data.sex}
              time={data.time}
              content={data.content}
              likes={data.likes}
              views={data.views}
              comments={data.comments}
              section={data.section}
            />
            {/* 添加评论输入框 */}
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
            {/* 添加图片  */}
            <div className="mt-4">
              <a href="https://mp.weixin.qq.com/s/MSKzIREICBiI43_bwkDg_g">
                <Image
                  lazy
                  src="https://img.qiqi.pro/x/clmqfna8t24eeuhuzk6ikf3kf.jpg?_s=1283x558"
                />
              </a>
            </div>
            {/* 评论列表 */}
            <div>
              <Comment id={id} />
            </div>
            {/* 底部 */}
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
