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
    title: "㊙️树洞",
    key: "6",
  },
  {
    title: "🐕小动物",
    key: "7",
  },
  {
    title: "🎁推广",
    key: "8",
  },
];
const TabBar = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" className="mt-5 border-dashed">
        {tab.map((item) => {
          return <Tabs.Tab title={item.title} key={item.key} />;
        })}
      </Tabs>
    </>
  );
};

export default TabBar;
