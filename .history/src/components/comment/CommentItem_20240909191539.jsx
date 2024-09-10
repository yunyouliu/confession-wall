import { React, useState } from "react";
import { Tabs } from "antd-mobile";
import Card from 'antd-mobile'
const CommentItem = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="mt-3 ml-2">
        <Card className="bg-purple-300">
          <CardHeader
            avatarUrl={avatarUrl}
            name={name}
            sex={sex}
            time={time}
            section={section}
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
      </div>
    </div>
  );
};

export default CommentItem;
