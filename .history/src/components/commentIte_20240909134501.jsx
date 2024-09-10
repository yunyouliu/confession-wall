import React from "react";
import { Tabs } from "antd-mobile";

const Commentitem = () => {
  return (
    <div>
      <Tabs>
        <Tabs.Tab title="水果" key="fruits" />
        <Tabs.Tab title="蔬菜" key="vegetables" />
      </Tabs>
    </div>
  );
};

export default Commentitem;
