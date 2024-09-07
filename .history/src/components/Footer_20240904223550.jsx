import { React, useState } from "react";
import { TabBar, Popup, List } from "antd-mobile";
import { AddCircleOutline } from "antd-mobile-icons";
const Footer = () => {
  const [activeKey, setActiveKey] = useState("todo");
  const [visible1, setVisible1] = useState(false);
  return (
    <div>
      <TabBar
        activeKey={activeKey}
        className="fixed bottom-1 left-0 right-0 bg-white overflow-hidden"
        onChange={(value) => {
          setActiveKey(value);
          if (value === "/user") {
            setVisible1(true);
          }
        }}
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
          title={<AddCircleOutline className="text-3xl" />}
        />
        <TabBar.Item
          key={"/user"}
          icon={
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-wode"></use>
            </svg>
          }
          title="我的"
        />
      </TabBar>

      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
          setActiveKey("/home");
        }}
        onClose={() => {
          setVisible1(false);
        }}
        position="bottom"
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "50vh",
        }}
      >
        <List mode="card" header={<span className="text-xl m-auto">我的信息</span>}>
          <List.Item extra="按照支付设置的顺序扣款">扣款方式</List.Item>
          <List.Item extra="200元">月限额</List.Item>
          <List.Item>帮助中心</List.Item>
          <List.Item>关闭服务</List.Item>
        </List>
      </Popup>
    </div>
  );
};

export default Footer;
