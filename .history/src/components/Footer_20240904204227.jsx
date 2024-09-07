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
        className="fixed bottom-1 left-0 right-0"
        onChange={(value) => setActiveKey(value)}
      >
        <TabBar.Item key={'/home'} icon={} title={item.title} />
        <TabBar.Item key={'/user'} icon={UserOutline} title={item.title} />
      </TabBar>
    </div>
  );
};

export default Footer;
