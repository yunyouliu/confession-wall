import React from "react";
import { TabBar } from "antd-mobile";

const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
];
const Footer = () => {
  return <div className="position-fixed bottom-0"></div>;
};

export default Footer;
