import React from "react";
import { Tabs,Button } from "antd-mobile";

const Commentitem = () => {
  return (
    <div className="mt-4 grig grid-cols-2 gap-8">
      <Button>最新评论</Button>
      <Button>最早评论</Button>
    </div>
  );
};

export default Commentitem;
