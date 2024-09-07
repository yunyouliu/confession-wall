import { React, useState } from "react";
import { Tabs, Button, Popup, Grid, AutoCenter } from "antd-mobile";

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
  const [activKey, setactivKey] = useState(1);
  return (
    <>
      <div className="pl-2 pr-0.5  mt-3 justify-between">
        <Tabs
          defaultActiveKey="1"
          className=" bg-[#fde5e9] font-mono decoration-8 leading-3 overflow-hidden  rounded-md"
        >
          {tab.map((item) => {
            return (
              <Tabs.Tab
                className="text-sm w-16"
                // className={`text-sm w-16  ${item.title==="小动物"?"-tracking-2":""}`}
                title={item.title}
                key={item.key}
              />
            );
          })}
          <Tabs.Tab className="text-sm w-10" title="" key="" />
          <Tabs.Tab className="text-sm w-10" title="" key="" />
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
      <Button
        fill="solid"
        className="absolute top-[192px] right-[10px]  h-[39px]"
        onClick={() => {
          setVisible1(true);
        }}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-gengduo1"></use>
        </svg>
      </Button>

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
        <Grid columns={3} gap={8} className="p-4">
          {tab.map((item) => {
            return (
              <Grid.Item key={item.key}>
                <div 
                // className=" bg-slate-200 h-[45px] m-0 leading-10 text-sm rounded-md"
                className={`${activKey===item.key?"bg-slate-200":""} h-[45px] m-0 leading-10 text-sm rounded-md`}
                >
                  <AutoCenter> {item.title}</AutoCenter>
                </div>
              </Grid.Item>
            );
          })}
        </Grid>
      </Popup>
    </>
  );
};

export default TabBar;
