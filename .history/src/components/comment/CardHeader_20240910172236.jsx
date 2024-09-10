import { React, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Popup, Grid, Button } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "@/components/SvgIcon";

// 卡片的头部组件
const CardHeader = ({
  avatarUrl,
  name,
  sex,
  time,
  content,
  display,
  toname,
  tosex,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-center flex items-center no-select">
      <Avatar
        className="w-[20px] h-[20px] mr-1 rounded-full"
        src={
          display ? avatarUrl : "https://img.qiqi.pro/x/anonymous-avatar.jpg"
        }
      />
      {display ? name : "匿名"}&nbsp; <SexIcon sex={sex} />
      {toname && (
        <span className="text-xs">
          ▶{toname}
          <SexIcon sex={tosex} className="ml-1" />
        </span>
      )}
      <div
        className="ml-auto flex items-center"
        onClick={() => {
          setVisible(true);
        }}
      >
        <span className="text-xs">{time}</span>
        <SvgIcon iconName="gengduo" className="ml-2" />
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        position="bottom"
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "25vh",
        }}
      >
        <div className="flex-col items-center">
          <div className="text-center mt-4 text-gray-500">
            {content.text.slice(0, 18)}...
          </div>
          <div className=" ">
            <Grid columns={4} gap={8} className=" m-4">
              <div className="rounded-full bg-slate-100 h-12 w-12">
                <SvgIcon iconName="zhiding" className=" w-9 h-9 mt-2 ml-1" />
              </div>
            </Grid>
            <Button className="w-full fixed bottom-0">取消</Button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

CardHeader.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.any,
  display: PropTypes.bool,
  toname: PropTypes.string,
  tosex: PropTypes.string,
};

export default CardHeader;
