/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-14 14:47:43
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-06 14:48:16
 */
import { React, useState, useEffect } from "react";
import EmojiSelector from "@/components/detail/emojiSelector";
import Foot from "@/components/detail/foot";
import { List, Switch, Toast, Button, Popup, AutoCenter } from "antd-mobile";
import { useSelector, useDispatch } from "react-redux";
import UseInfo from "@/components/index/UserInfo";
import axios from "axios";
import {
  setFlag,
  setSection,
  setOnlyComments,
  setTop,
} from "@/redux/commentSlice";

const tab = [
  { name: "说说" },
  { name: "吐槽" },
  { name: "问问" },
  { name: "帮帮" },
  { name: "树洞" },
  { name: "动物" },
  { name: "推广" },
];

const EassyPost = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visiable, setVisiable] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { section } = useSelector((state) => state.comment);
  // 获取用户数据
  useEffect(() => {
    const FechData = async () => {
      const res = await axios.get(`/wall/user/info/${user.id}`);
      if (res.data.code === 200) {
        setData(res.data.user);
      } else {
        Toast.show("获取数据失败");
      }
    };
    FechData();
  }, [user]);

  // 处理开关选中
  const handleTopSwitchChange = (checked) => {
    dispatch(setTop(checked ? 1 : 0));
  };
  const handleCommentSwitchChange = (checked) => {
    dispatch(setOnlyComments(checked ? 1 : 0));
  };

  // 复制用户ID
  const handleCopy = () => {
    navigator.clipboard
      .writeText(user.id)
      .then(() => Toast.show("你的ID已复制到剪切板"));
  };

  return (
    <div className="pt-10 px-3 rounded-lg ">
      {/* 头部 */}
      <EmojiSelector type="1" />

      {/* 内容 */}
      <div className="mt-5 p-2 border-solid border-1 border rounded-lg">
        <List
          className="select-none text-left text-gray-800"
          style={{
            "--border-bottom": "none",
            "--border-top": "none",
            "--border-inner": "none",
          }}
        >
          <List.Item
            className="texxt-base text-gray-500"
            description={
              <span className="text-[10px] text-left">
                置顶可让更多人看到，另外商业推广类帖子必须申请置顶，否则可能会被删除甚至禁言
              </span>
            }
            extra={
              <Switch
                onChange={handleTopSwitchChange}
                style={{
                  "--checked-color": "#00b578",
                  "--height": "26px",
                  "--width": "43px",
                }}
              />
            }
          >
            申请置顶
          </List.Item>
          <List.Item
            className="text-base text-gray-500"
            prefix="仅自己可评论"
            extra={
              <Switch
                onChange={handleCommentSwitchChange}
                style={{
                  "--checked-color": "#00b578",
                  "--height": "26px",
                  "--width": "43px",
                }}
              />
            }
          />
          <List.Item
            className="mt-3 text-base text-gray-500"
            extra={
              <Button
                shape="rounded"
                className="text-gray-500 text-lg"
                onClick={() => setVisible(true)}
              >
                {tab[section]?.name || tab[0].name}
              </Button>
            }
          >
            分类
          </List.Item>
        </List>
      </div>

      {/* 用户信息 */}
      <UseInfo
        visible={visiable}
        onClose={() => setVisiable(false)}
        user={data}
        onCopy={handleCopy}
      />

      {/* 底部 */}
      <div className="fixed bottom-0 h-14 left-0 right-0 border px-4 overflow-hidden select-none">
        <Foot
          type={1}
          sex={user.sex}
          name={user.username}
          avatarUrl={user.avatarUrl}
          handleComment={() => dispatch(setFlag(true))}
          onclick={() => setVisiable(true)}
        />
      </div>

      {/* 底部弹窗 */}
      <Popup
        visible={visible}
        showCloseButton
        onMaskClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
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
            <AutoCenter className="text-xl text-slate-950">选择分类</AutoCenter>
          }
        >
          {tab.map((item, index) => (
            <List.Item
              key={index}
              clickable={false}
              style={{ "--border-bottom": "none", "--border-inner": "none" }}
              onClick={() => {
                dispatch(setSection(index));
                setVisible(false);
              }}
            >
              <div
                className={`${index === section
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-100"
                  } w-full h-10 p-3 text-center`}
              >
                {item.name}
              </div>
            </List.Item>
          ))}
        </List>
      </Popup>
    </div>
  );
};

export default EassyPost;
