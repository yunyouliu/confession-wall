import React from "react";
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
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
];
const [activeKey, setActiveKey] = useState('todo')
const Footer = () => {
  return <div className="position-fixed bottom-0"></div>;
};

export default Footer;
