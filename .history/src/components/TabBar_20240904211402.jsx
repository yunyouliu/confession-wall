import { React, useState } from "react";
import { Tabs, Button, Popup, Grid } from "antd-mobile";
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
  const [visible1, setVisible1] = useState(false);
  return (
    <>
      <div className="pl-2 pr-0.5  mt-3 justify-between">
        <Tabs
          defaultActiveKey="1"
          className=" bg-[#fde5e9] font-mono decoration-8 leading-3 overflow-hidden pr-3 rounded-md"
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

        <Tabs className=" bg-[#fde5e9] font-mono  overflow-hidden mr-0.5 mt-4 rounded-md">
          {nav.map((item) => {
            return (
              <Tabs.Tab
                className="text-sm w-10"
                title={item.title}
                key={item.key}
              />
            );
          })}
        </Tabs>
      </div>
      <span
        className="absolute top-[189px] right-[-5px] translate-x-[-50%] w-[1px] h-[37px] overflow-hidden"
        onClick={() => {
          setVisible1(true);
        }}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-gengduo1"></use>
        </svg>
      </span>

      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        position="top"
        bodyStyle={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          minHeight: "20vh",
        }}
      >
        <Grid columns={3} gap={2}>
          {tab.map((item) => {
            return <Grid.Item key={item.key}>{item.title}</Grid.Item>;
          })}
        </Grid>
      </Popup>
    </>
  );
};

export default TabBar;
