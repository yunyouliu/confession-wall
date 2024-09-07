import { React, useState } from "react";
import { TabBar } from "antd-mobile";
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
        <TabBar.Item
          key={"/home"}
          icon={
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-home"></use>
            </svg>
          }
          title="首页"
        />
        <TabBar.Item key={"/user"} icon={ <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-home"></use>
            </svg>} title="我的" />
      </TabBar>
    </div>
  );
};

export default Footer;
