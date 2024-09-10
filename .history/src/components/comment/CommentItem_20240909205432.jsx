import { React, useState } from "react";
import { Card } from "antd-mobile";
import CardHeader from "./CardHeader";
import CardContent from "../card/CardContent";
import CardFooter from "../card/CardFooter";
import Proptypes from "prop-types";
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
  child,
}) => {
  const [activeTab, setActiveTab] = useState(0);
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
          />
          <CardContent text={content} id={userId | 0} />
          <CardFooter
            likes={likes}
            views={views}
            comments={comments}
            id={userId}
          />
        </Card>
        {children &&
          children.map((item) => {
            return (
              <Card className="bg-purple-300 mt-3" key={item.id}>
                <CardHeader
                  avatarUrl={children.avatarUrl}
                  name={children.name}
                  sex={children.sex}
                  time={children.time}
                  content={children.content}
                />
                <CardContent text={children.content} id={userId | 0} />
                <CardFooter
                  likes={children.likes}
                  views={children.views}
                  comments={children.comments}
                  id={children.userId}
                />
              </Card>
            );
          })}
      </div>
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
};
export default CommentItem;
