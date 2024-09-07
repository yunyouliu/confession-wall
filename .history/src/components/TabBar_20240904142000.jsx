import React from "react";
import { Tabs } from "antd-mobile";

const tab = [
  {
    title: "Espresso",
    key: "1",
  },
  {
    title: "Americano",
    key: "2",
  },
  {
    title: "Cappuccino",
    key: "3",
  },
  {
    title: "Latte",
    key: "4",
  },
];
const TabBar = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        {tab.map((item) => {
          return <Tabs.Tab title={item.title} key={item.key} />;
        })}
        <Tabs.Tab title="Espresso" key="1">
          1
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default TabBar;
