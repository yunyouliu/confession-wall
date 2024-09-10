import React from "react";
import { Tabs } from "antd-mobile";

const Commentitem = () => {
  return (
    <div className="mt-4">
      <Tabs>
        <Tabs.Tab title="最新评论" key="new" />
        <Tabs.Tab title="最早评论" key="old" />
      </Tabs>
    </div>
  );
};

export default Commentitem;
