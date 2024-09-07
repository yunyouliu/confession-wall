import React from "react";
import { Tabs } from "antd-mobile";

const tab = [
  {
    title: "全部",
    key: "1",
  },
  {
    title: "我回",
    key: "2",
  },
  {
    title: "Cappuccino",
    key: "3",
  },
  {
    title: "Latte",
    key: "4",
  },
];
const TabBar = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        {tab.map((item) => {
          return <Tabs.Tab title={item.title} key={item.key} />;
        })}
      </Tabs>
    </>
  );
};

export default TabBar;
