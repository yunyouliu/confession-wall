import React from "react";
import { Tabs } from "antd-mobile";

const Commentitem = () => {
  return (
    <div>
      <Tabs>
        <Tabs.Tab title="最新评论" key="fruits" />
        <Tabs.Tab title="最早评论" key="vegetables" />
      </Tabs>
    </div>
  );
};

export default Commentitem;
