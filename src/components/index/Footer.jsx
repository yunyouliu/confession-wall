import { React, useState } from "react";
import { TabBar, Popup, List, AutoCenter } from "antd-mobile";
import { AddCircleOutline, RightOutline } from "antd-mobile-icons";
import SvgIcon from "../SvgIcon.jsx";
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
          icon={<SvgIcon iconName="home" />}
          title="首页"
        />
        <TabBar.Item
          key={"/category"}
          title={<AddCircleOutline className="text-3xl" />}
        />
        <TabBar.Item
          key={"/user"}
          icon={<SvgIcon iconName="wode" />}
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
          minHeight: "30vh",
        }}
      >
        <List
          mode="card"
          header={
            <AutoCenter className="text-xl text-center">我的信息</AutoCenter>
          }
        >
          <List.Item
            extra={
              <div className="flex">
                <img
                  src="https://img.qiqi.pro/mirror/gravatar/avatar/2ade0e9729c064caaf7b347193ce0251?s=40&d=retro&f=y"
                  alt="Avatar"
                  className="w-9 h-9 rounded-full"
                ></img>

                {/* <RightOutline className="text-xl mt-2 float-right" /> */}
              </div>
            }
          >
            头像
          </List.Item>
          <List.Item clickable extra={<>用户2054310</>}>
            昵称
          </List.Item>
          <List.Item clickable extra="男">
            性别
          </List.Item>
          <List.Item clickable extra="189807350">
            手机号
          </List.Item>
          <List.Item clickable extra="暂未认证，去认证">
            身份认证
          </List.Item>
          <List.Item clickable extra="2054310">
            ID
          </List.Item>
          <List.Item clickable extra="0">
            点券
          </List.Item>
        </List>
      </Popup>
    </div>
  );
};

export default Footer;
