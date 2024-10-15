import { React, useState, useMemo } from "react";
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
  idx,
  id,
  child = [], // 默认空数组
}) => {
  const [applyName, setApplyName] = useState(0);
  const [visble, setVisble] = useState(false);
  const [rootId, setRootId] = useState(0);
  const [showAllChildren, setShowAllChildren] = useState(false); // 控制是否展示全部子评论

  // 默认展示一条子评论
  const visibleChildren = showAllChildren ? child : child.slice(0, 1);

  // 使用usememo 优化Popup中的内容
  const popupContent = useMemo(() => {
    return (
      <div>
        <div className="flex justify-center items-center h-12 text-xl">
          <span>回复[{applyName}]</span>
        </div>
        <EmojiSelector
          sex={sex}
          name={name}
          avatarUrl={avatarUrl}
          type="2"
          rootId={1}
          postId={id}
          eassyId={idx}
        />
      </div>
    );
  }, [applyName, rootId, avatarUrl, name, sex]);

  return (
    <div>
      <div className="mt-3">
        <Card className="bg-purple-300">
          <CardHeader
            avatarUrl={avatarUrl}
            name={name}
            sex={sex}
            time={time}
            content={content}
            display={display}
          />
          <div
            onClick={() => {
              setApplyName(display == 1 ? "匿名" : name);
              setVisble(true);
            }}
          >
            <CardContent text={content} id={userId || 0} />
          </div>
          <CardFooter
            likes={likes}
            views={views}
            comments={comments}
            id={userId}
          />
        </Card>

        {/* 子评论 */}
        {child.length > 0 && (
          <div className="ml-4">
            {visibleChildren.map((item) => (
              <Card className="bg-purple-300 mt-3" key={item.id}>
                <CardHeader
                  avatarUrl={item.avatarUrl}
                  name={item.name}
                  sex={item.sex}
                  time={item.time}
                  content={item.content}
                  display={item.display}
                  toname={item.toName}
                  tosex={item.toSex}
                />
                <div
                  onClick={() => {
                    setApplyName(item.display === 0 ? item.name : "匿名");
                    setVisble(true);
                  }}
                >
                  <CardContent text={item.content} id={item.userId || 0} />
                </div>
                <CardFooter
                  likes={item.likes}
                  views={item.views}
                  comments={item.comments}
                  id={item.userId}
                />
              </Card>
            ))}

            {/* 展示更多子评论和收起按钮 */}
            {child.length > 1 && (
              <Button
                className="ml-4 mt-2 text-purple-600 border-none p-0 flex items-center text-sm"
                onClick={() => setShowAllChildren(!showAllChildren)}
              >
                {showAllChildren ? "收起↑" : `展开${child.length - 1}条回复`}
              </Button>
            )}
          </div>
        )}
      </div>

      <Popup
        visible={visble}
        destroyOnClose
        onMaskClick={() => setVisble(false)}
        onClose={() => setVisble(false)}
        bodyStyle={{
          minHeight: "30vh",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        showCloseButton
      >
        {popupContent}
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
  display: Proptypes.number,
  idx: Proptypes.number,
  id: Proptypes.number,
};

export default CommentItem;
