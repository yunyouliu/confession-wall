import { React, useState } from "react";
import { TabBar, Popup } from "antd-mobile";
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
        }}
        onClose={() => {
          setVisible1(false);
        }}
        position="top"
        bodyStyle={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          minHeight: "20vh",
        }}
      ></Popup>
    </div>
  );
};

export default Footer;
