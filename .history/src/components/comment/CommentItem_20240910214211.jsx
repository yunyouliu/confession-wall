import { React, useState } from "react";
import { Card, Popup, Button } from "antd-mobile";
import CardHeader from "./CardHeader";
import CardContent from "../card/CardContent";
import CardFooter from "../card/CardFooter";
import Proptypes from "prop-types";
import EmojiSelector from "../detail/emojiSelector";

const CommentItem = ({
  avatarUrl,
  name,
  sex,
  time,
  content,
  likes,
  views,
  comments,
  userId,
  display,
  child = [], // 默认空数组
}) => {
  const [applyName, setApplyName] = useState(0);
  const [visble, setVisble] = useState(false);
  const [showAllChildren, setShowAllChildren] = useState(false); // 控制是否展示全部子评论

  // 默认展示一条子评论
  const visibleChildren = showAllChildren ? child : child.slice(0, 1);

  return (
    <div>
     <div className="mt-3">
  <Card className="bg-purple-300">
    <div className="flex items-start">
      <div className="relative">
        {/* 小圆点 */}
        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2.5"></div>
        {/* 连接线条 */}
        <div className="absolute left-1 top-6 h-full border-l-2 border-purple-400"></div>
      </div>
      <div className="ml-4">
        <CardHeader
          avatarUrl={avatarUrl}
          name={name}
          sex={sex}
          time={time}
          content={content}
          display={display}
        />
        <CardContent text={content} id={userId | 0} />
        <CardFooter likes={likes} views={views} comments={comments} id={userId} />
      </div>
    </div>
    {child && child.length > 0 && (
      <div className="ml-6 mt-3">
        {/* 子评论 */}
        {child.map((item, index) => (
          <div className="flex items-start mt-3" key={item.id}>
            <div className="relative">
              {/* 子评论的小圆点 */}
              <div className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2.5"></div>
              {/* 如果不是最后一条子评论，显示连接线条 */}
              {index < child.length - 1 && (
                <div className="absolute left-1 top-6 h-full border-l-2 border-purple-400"></div>
              )}
            </div>
            <div className="ml-4">
              <CardHeader
                avatarUrl={item.avatarUrl}
                name={item.name}
                sex={item.sex}
                time={item.time}
                content={item.content}
                display={item.display}
                toname={item.toname}
                tosex={item.tosex}
              />
              <CardContent text={item.content} id={item.userId | 0} />
              <CardFooter
                likes={item.likes}
                views={item.views}
                comments={item.comments}
                id={item.userId}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </Card>
</div>


      <Popup
        visible={visble}
        onMaskClick={() => setVisble(false)}
        onClose={() => setVisble(false)}
        bodyStyle={{
          height: "30vh",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        showCloseButton
      >
        <div className="flex justify-center items-center h-12 text-xl">
          <span>回复[{applyName}]</span>
        </div>
        <EmojiSelector sex={sex} name={name} avatarUrl={avatarUrl} />
      </Popup>
    </div>
  );
};

// 属性验证
CommentItem.propTypes = {
  avatarUrl: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  sex: Proptypes.oneOf(["male", "female"]).isRequired,
  time: Proptypes.string.isRequired,
  content: Proptypes.any.isRequired,
  likes: Proptypes.number.isRequired,
  views: Proptypes.number,
  comments: Proptypes.number,
  section: Proptypes.string,
  userId: Proptypes.number,
  child: Proptypes.array, // 将 child 定义为数组
  display: Proptypes.bool,
};

export default CommentItem;
