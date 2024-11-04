/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-16 18:52:11
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:20:24
 */
// UserPopup.jsx
import { Popup, List, AutoCenter, Toast, Input, Button } from "antd-mobile";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UseInfo = ({ visible, onClose, user, onCopy }) => {
  const [visibleNickname, setVisibleNickname] = useState(false);
  const [visibleGender, setVisibleGender] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [selectedGender, setSelectedGender] = useState(false); // 默认 false

  // 当 user.sex 变化时同步更新 selectedGender
  useEffect(() => {
    setSelectedGender(user.sex === "male");
  }, [user.sex]);

  const handleGenderChange = async () => {
    setVisibleGender(false);
    const { data } = await axios.put("wall/user/update", {
      param: { sex: selectedGender ? "male" : "female" },
    });
    if (data.code === 200) {
      Toast.show("修改成功");
    }
  };

  const handleNicknameChange = async () => {
    setVisibleNickname(false);
    const { data } = await axios.put("wall/user/update", {
      param: { name: newNickname },
    });
    if (data.code === 200) {
      Toast.show("修改成功");
    }
  };
  return (
    <>
      <Popup
        visible={visible}
        showCloseButton
        onMaskClick={onClose}
        onClose={onClose}
        position="bottom"
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "30vh",
        }}
      >
        <List
          mode="card"
          className="select-none"
          style={{
            "--border-bottom": "none",
            "--border-top": "none",
            "--border-inner": "none",
          }}
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
                  src={user.avatarUrl}
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                ></img>
              </div>
            }
          >
            头像
          </List.Item>
          <List.Item
            clickable
            extra={user.userName || "无"}
            onClick={() => {
              setVisibleNickname(true);
            }}
          >
            昵称
          </List.Item>
          <List.Item
            clickable
            extra={user.sex === "male" ? "男" : "女"}
            onClick={() => {
              setVisibleGender(true);
            }}
          >
            性别
          </List.Item>
          <List.Item clickable extra={user.phoneNumber || "无"}>
            手机号
          </List.Item>
          <List.Item clickable extra="暂未认证，去认证">
            身份认证
          </List.Item>
          <List.Item clickable extra={user.id || "无"} onClick={onCopy}>
            ID
          </List.Item>
          <List.Item clickable extra="0点券">
            点券
          </List.Item>
        </List>
      </Popup>

      {/* 昵称修改 */}
      <Popup
        visible={visibleNickname}
        showCloseButton
        onMaskClick={() => setVisibleNickname(false)}
        onClose={() => setVisibleNickname(false)}
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
          <List.Item
            extra={
              <Input
                placeholder="请输入"
                value={newNickname}
                onChange={(val) => setNewNickname(val)}
              />
            }
          >
            新昵称
          </List.Item>
        </List>
        <Button
          block
          className="w-4/5 m-auto"
          shape="rounded"
          color="success"
          onClick={handleNicknameChange}
        >
          保存
        </Button>
      </Popup>

      {/* 性别修改 */}
      <Popup
        visible={visibleGender}
        showCloseButton
        onMaskClick={() => setVisibleGender(false)}
        onClose={() => setVisibleGender(false)}
        position="bottom"
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "30vh",
        }}
      >
        <AutoCenter className="text-xl text-center mt-5 text-slate-950 select-none">
          我的性别
        </AutoCenter>

        <div className="flex flex-row mt-6 m-auto gap-8 select-none">
          <div
            className={`rounded-full w-16 h-16 p-3 ml-[100px] ${
              selectedGender ? "bg-sky-400" : "bg-gray-200"
            }`}
            onClick={() => setSelectedGender(true)}
          >
            <svg className="w-5 h-5 ml-2 " aria-hidden="true">
              <use xlinkHref="#icon-nanxing" />
            </svg>
            <span className="ml-2 text-white text-lg">男</span>
          </div>
          <div
            className={`rounded-full w-16 h-16 p-3 ${
              !selectedGender ? "bg-pink-400" : "bg-gray-200"
            }`}
            onClick={() => setSelectedGender(false)}
          >
            <svg className="w-5 h-5 ml-2" aria-hidden="true">
              <use xlinkHref="#icon-nvxing" />
            </svg>
            <span className="ml-2 text-white text-lg">女</span>
          </div>
        </div>
        <Button
          block
          className=" w-3/5  m-auto mt-6"
          shape="rounded"
          color="success"
          onClick={handleGenderChange}
        >
          保存
        </Button>
      </Popup>
    </>
  );
};

UseInfo.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default UseInfo;
