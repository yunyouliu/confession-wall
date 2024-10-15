import { React, useState, useEffect } from "react";
import {
  TabBar,
  Popup,
  List,
  AutoCenter,
  Toast,
  Input,
  Button,
  Radio,
  Mask,
  Image,
} from "antd-mobile";
import { AddCircleOutline, CloseCircleOutline } from "antd-mobile-icons";
import SvgIcon from "../SvgIcon.jsx";
import { useSelector } from "react-redux";
import axios from "axios";
import SexIcon from "../card/SexIcon.jsx";
import { useNavigate } from "react-router-dom";

const tab = [
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/1f62c.png",
    name: "说说",
    description: "我想随便说点啥",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/1f31a.png",
    name: "吐槽",
    description: "我想吐槽曝光",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/2753.png",
    name: "问问",
    description: "我想问问",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/1f4b0.png",
    name: "帮帮",
    description: "我想求跑腿、代各种",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/3299-fe0f.png",
    name: "树洞",
    description: "我想分享秘密",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/1f415.png",
    name: "小动物",
    description: "我想分享小动物",
  },
  {
    img: "https://img.qiqi.pro/mirror/cdnjs/ajax/libs/emoji-datasource-apple/15.1.2/img/apple/64/1f381.png",
    name: "推广",
    description: "我想发广告",
  },
];

const Footer = () => {
  const [activeKey, setActiveKey] = useState("todo");
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [data, setdata] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // 复制
  const handleCopy = () => {
    // 复制文本到剪贴板
    navigator.clipboard
      .writeText(user.id)
      .then(Toast.show("你的ID已复制到剪切板"));
  };

  // 处理跳转
  const handleClick = (id) => {
    return function () {
      navigate(`/eassypost/${id}`);
    };
  };

  useEffect(() => {
    const FechData = async () => {
      const res = await axios.get(`/wall/user/info/${user.id}`);
      if (res.data.code === 200) {
        setdata(res.data.user);
      } else {
        Toast.show("获取数据失败");
      }
    };
    FechData();
  }, [user]);

  return (
    <div>
      {/* 底部导航栏 */}
      <TabBar
        activeKey={activeKey}
        className="fixed bottom-1 left-0 right-0 bg-white overflow-hidden select-none"
        onChange={(value) => {
          if (value === "/user") {
            setVisible1(true);
          }
          if (value === "/category") {
            setVisible4(true);
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

      {/* 我的信息 */}
      <Popup
        visible={visible1}
        showCloseButton
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
            <AutoCenter className="text-sm text-center text-slate-950">
              我的信息
            </AutoCenter>
          }
        >
          <List.Item
            clickable
            extra={
              <div className="flex">
                <img
                  src={data.avatarUrl}
                  alt="Avatar"
                  className="w-9 h-9 rounded-full"
                ></img>

                {/* <RightOutline className="text-xl mt-2 float-right" /> */}
              </div>
            }
          >
            头像
          </List.Item>
          <List.Item
            clickable
            extra={data.userName || "无"}
            onClick={() => {
              setVisible2(true);
            }}
          >
            昵称
          </List.Item>
          <List.Item
            clickable
            extra={data.sex === "male" ? "男" : "女"}
            onClick={() => {
              setVisible3(true);
            }}
          >
            性别
          </List.Item>
          <List.Item clickable extra={data.phoneNumber || "无"}>
            手机号
          </List.Item>
          <List.Item clickable extra="暂未认证，去认证">
            身份认证
          </List.Item>
          <List.Item clickable extra={data.id || "无"} onClick={handleCopy}>
            ID
          </List.Item>
          <List.Item clickable extra="0点券">
            点券
          </List.Item>
        </List>
      </Popup>

      {/* 昵称修改 */}
      <Popup
        visible={visible2}
        showCloseButton
        onMaskClick={() => {
          setVisible2(false);
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
            <AutoCenter className="text-xl text-center text-slate-950">
              修改昵称
            </AutoCenter>
          }
        >
          <p className="ml-3 mt-5 text-sm text-slate-500">
            请设置10字以内的昵称
          </p>
          {/* 输入框 */}
          <List.Item extra={<Input placeholder="请输入" />}>新昵称</List.Item>
        </List>
        <Button
          block
          className=" w-4/5  m-auto"
          shape="rounded"
          color="success"
        >
          保存
        </Button>
      </Popup>

      {/* 选择分类 */}
      <Mask
        visible={visible4}
        onMaskClick={() => setVisible4(false)}
        opacity={0.65}
      >
        <div className="h-full w-full backdrop-blur-sm">
          {tab.map((item, index) => {
            return (
              <div
                className="flex h-12 w-full mt-8 select-none"
                key={index}
                onClick={handleClick(index)}
              >
                <Image
                  src={item.img}
                  width={40}
                  height={40}
                  className="ml-[120px]"
                />
                <span className="text-xl text-white ml-2 h-[20px]  float-right ">
                  {item.name}
                </span>
                <span className="text-sm text-gray-300 mt-7 -ml-[40px]">
                  {item.description}
                </span>
              </div>
            );
          })}
          <div
            className="rounded-full h-40   mt-8"
            onClick={() => setVisible4(false)}
          >
            <CloseCircleOutline
              className="m-auto"
              fontSize={45}
              color="rgb(255, 255, 255)"
            />
          </div>

          {/* <div className="flex h-12 w-full mt-8">
            <Image
              src={tab[0].img}
              width={50}
              height={50}
              className="ml-[120px]"
            />
            <span className="text-xl text-white ml-2 h-[20px]  float-right ">
              {tab[0].name}
            </span>
            <span className="text-sm text-gray-300 mt-7 -ml-[40px]">
              {tab[0].description}
            </span>
          </div> */}
        </div>
      </Mask>

      {/* 性别修改 */}
      <Popup
        visible={visible3}
        showCloseButton
        onMaskClick={() => {
          setVisible3(false);
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
        <AutoCenter className="text-xl text-center mt-5 text-slate-950">
          我的性别
        </AutoCenter>
        <Radio
          value="radio1"
          icon={(checked) =>
            checked ? <SexIcon sex="male" /> : <SexIcon sex="male" />
          }
        />

        <Radio
          value="radio2"
          icon={(checked) =>
            checked ? (
              <SexIcon sex="female" className="bg-emerald-500" />
            ) : (
              <SexIcon sex="female" />
            )
          }
        />
        <Button
          block
          className=" w-4/5  m-auto"
          shape="rounded"
          color="success"
        >
          保存
        </Button>
      </Popup>
    </div>
  );
};

export default Footer;
