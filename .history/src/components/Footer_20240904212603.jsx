import { React, useState } from "react";
import { Button, TabBar } from "antd-mobile";

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
        <TabBar.Item
          key={"/category"}
          title={
            <Button
              color="primary"
              fill="outline"
              className="rounded-full"
              size="mini"
            >
              发布
            </Button>
          }
        />
        key={"/user"}
        icon=
        {
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-wode"></use>
          </svg>
        }
        title="我的" />
      </TabBar>
    </div>
  );
};

export default Footer;
