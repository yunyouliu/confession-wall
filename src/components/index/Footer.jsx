/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 20:33:01
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-13 14:34:35
 */
import { React, useState, useEffect } from "react";
import { TabBar, Toast, Mask, Image } from "antd-mobile";
import { AddCircleOutline, CloseCircleOutline } from "antd-mobile-icons";
import SvgIcon from "../SvgIcon.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseInfo from "./UserInfo.jsx";
import { useDispatch } from "react-redux";
import { setSection } from "@/redux/commentSlice.js";
import { updateUserInfo } from "@/api/api";

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
    name: "动物",
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
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [data, setdata] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      setVisible(false);
      dispatch(setSection(id));
      navigate(`/eassypost`);
    };
  };

  useEffect(() => {
    const FechData = async () => {
      const res = await updateUserInfo(user.id);
      setdata(res);
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
            setVisible(true);
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
          title={<AddCircleOutline className="text-4xl" />}
        />
        <TabBar.Item
          key={"/user"}
          icon={<SvgIcon iconName="wode" />}
          title="我"
        />
      </TabBar>

      {/* 选择分类 */}
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity={0.65}
      >
        <div className="h-full w-screen backdrop-blur-sm">
          {tab.map((item, index) => {
            return (
              <div
                className="flex h-[80%] w-full mt-[8%] select-none"
                key={index}
                onClick={handleClick(index)}
              >
                <Image
                  src={item.img}
                  width={40}
                  height={40}
                  className="ml-[35%]"
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
            onClick={() => setVisible(false)}
          >
            <CloseCircleOutline
              className="m-auto"
              fontSize={45}
              color="rgb(255, 255, 255)"
            />
          </div>
        </div>
      </Mask>

      {/* 我的信息 */}
      <UseInfo
        visible={visible1}
        onClose={() => setVisible1(false)}
        user={user}
        onCopy={handleCopy}
      />
    </div>
  );
};

export default Footer;
