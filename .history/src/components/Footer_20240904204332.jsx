import { React, useState } from "react";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
  },
];

const Footer = () => {
  const [activeKey, setActiveKey] = useState("todo");
  return (
    <div>
      <TabBar
        activeKey={activeKey}
        className="fixed bottom-1 left-0 right-0 bg-white overflow-hidden"
        onChange={(value) => setActiveKey(value)}
      >
        <TabBar.Item key={"/home"} icon={AppOutline} title="首页" />
        <TabBar.Item key={"/user"} icon={UserOutline} title="我的" />
      </TabBar>
    </div>
  );
};

export default Footer;
