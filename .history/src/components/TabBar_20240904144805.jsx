import React from "react";
import { Tabs } from "antd-mobile";

const tab = [
  {
    title: "全部",
    key: "1",
  },
  {
    title: "😥我回",
    key: "2",
  },
  {
    title: "🌚吐槽",
    key: "3",
  },
  {
    title: "❓问问",
    key: "4",
  },
  {
    title: "💰帮帮",
    key: "5",
  },
  {
    title: "🎉活动",
    key: "6",
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
