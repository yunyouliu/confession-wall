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
  return <div className="position-fixed bottom-0"></div>;
};

export default Footer;
