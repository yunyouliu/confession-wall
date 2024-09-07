import React from "react";
import { Tabs, Button } from "antd-mobile";
import { UnorderedListOutline } from "antd-mobile-icons";
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

// 我发 我回 我赞 新回 新发 精选  热榜
const nav = [
  { title: "我发", key: 1 },
  { title: "我回", key: 2 },
  { title: "我赞", key: 3 },
  { title: "新回", key: 4 },
  { title: "新发", key: 5 },
  { title: "精选", key: 6 },
  { title: "热榜", key: 7 },
];
const TabBar = () => {
  return (
    <>
      <div className="pl-2 pr-2  mt-4">
        <Tabs
          defaultActiveKey="1"
          className=" bg-[#fde5e9] font-mono decoration-8 leading-3 overflow-hidden pr-3"
        >
          {tab.map((item) => {
            return (
              <Tabs.Tab
                className=" text-sm w-16"
                title={item.title}
                key={item.key}
              />
            );
          })}
        </Tabs>

        <Tabs className=" bg-[#fde5e9] font-mono decoration-8 leading-3 overflow-hidden pr-2 mt-4">
          {nav.map((item) => {
            return <Tabs.Tab className=" text-sm w-16" title={item.title} key={item.key} />;
          })}
        </Tabs>
      </div>
      <Button
        className="absolute top-[221px] right-[10px] translate-x-[-50%] w-2 h-[37px] overflow-hidden"
        onClick={() => {}}
      >
        <UnorderedListOutline />
      </Button>
    </>
  );
};

export default TabBar;
