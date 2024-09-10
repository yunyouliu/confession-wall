import { React, useState } from "react";
import { Card, Popup } from "antd-mobile";
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
  child,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [visble, setVisble] = useState(false);
  return (
    <div>
      <div className="mt-3 ">
        <Card className="bg-purple-300">
          <CardHeader
            avatarUrl={avatarUrl}
            name={name}
            sex={sex}
            time={time}
            content={content}
            display={display}
          />
          <div onClick={()=>{setVisble(true)}}>
            <CardContent text={content} id={userId | 0} />
          </div>
          <CardFooter
            likes={likes}
            views={views}
            comments={comments}
            id={userId}
          />
        </Card>
        {child &&
          child.map((item) => {
            return (
              <Card className="bg-purple-300 mt-3 ml-4" key={item.id}>
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
                <div
                  onClick={() => {
                    setVisble(true);
                  }}
                >
                  <CardContent text={item.content} id={item.userId | 0} />
                </div>
                <CardFooter
                  likes={item.likes}
                  views={item.views}
                  comments={item.comments}
                  id={item.userId}
                />
              </Card>
            );
          })}
      </div>

      <Popup
        visible={visble}
        onMaskClick={() => {
          setVisble(false);
        }}
        bodyStyle={{
          height: "40vh",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        showCloseButton
      >

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
  child: Proptypes.any,
  display: Proptypes.bool,
};
export default CommentItem;
