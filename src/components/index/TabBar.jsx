import { React, useState } from "react";
import { Tabs, Button, Popup, Grid, AutoCenter, Dropdown } from "antd-mobile";
import SvgIcon from "../SvgIcon";
import { useSelector, useDispatch } from "react-redux";
import { setTab, setSection } from "@/redux/tabSlice";

const tabs = [
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
  const [visible, setVisible] = useState(false);
  const [activKey, setactivKey] = useState(1);
  const section = useSelector((state) => state.tab.section);
  const tab = useSelector((state) => state.tab.tab);
  const dispatch = useDispatch();

  return (
    <>
      <div className="pl-2 pr-0.5  mt-3 justify-between">
        <Tabs
          defaultActiveKey="1"
          activeKey={section}
          onChange={(value) => {
            setactivKey(value);
            dispatch(setSection(value));
          }}
          className=" bg-[#fde5e9] font-mono decoration-8 leading-3 overflow-hidden  rounded-md"
        >
          {tabs.map((item) => {
            return (
              <Tabs.Tab
                className="text-sm w-16"
                // className={`text-sm w-16  ${item.title==="小动物"?"-tracking-2":""}`}
                title={item.title}
                key={item.key}
              />
            );
          })}
          <Tabs.Tab className="text-sm w-10" title="" key="12" />
          <Tabs.Tab className="text-sm w-10" title="" key="13" />
        </Tabs>

        <Tabs
          defaultActiveKey="1"
          activeKey={tab}
          onChange={(value) => {
            dispatch(setTab(value));
          }}
          className=" bg-[#fde5e9] font-mono  overflow-hidden mt-4 w-[180]  rounded-md"
        >
          {nav.map((item) => {
            return (
              <Tabs.Tab
                className="text-sm w-10"
                title={item.title}
                key={item.key}
              />
            );
          })}
          {/* <Tabs.Tab
            className="text-sm w-10"
            title={
              <Dropdown className="text-sm mr-5 ">
                <Dropdown.Item key="sorter" title="热榜"></Dropdown.Item>
              </Dropdown>
            }
            key="热榜"
          ></Tabs.Tab> */}
        </Tabs>
      </div>
      <Button
        fill="solid"
        className="absolute top-[192px] right-[10px]  h-[39px]"
        onClick={() => {
          setVisible(true);
        }}
      >
        <SvgIcon iconName="gengduo1" />
      </Button>

      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        position="top"
        bodyStyle={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          minHeight: "20vh",
        }}
      >
        <Grid columns={3} gap={8} className="p-4">
          {tabs.map((item) => {
            return (
              <Grid.Item
                key={item.key}
                onClick={() => {
                  setactivKey(item.key);
                  dispatch(setSection(item.key));
                  setVisible(false);
                }}
              >
                <div
                  // className=" bg-slate-200 h-[45px] m-0 leading-10 text-sm rounded-md"
                  className={`${
                    activKey == item.key
                      ? "bg-emerald-200 text-emerald-500"
                      : "bg-slate-200"
                  } h-[45px] m-0 leading-[48px] text-sm rounded-md`}
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
