/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-05 20:51:46
 * @LastEdito rs: yunyouliu
 * @LastEditTime: 2024-10-27 00:17:44
 */
import { React, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Popup, Grid, Button,Ellipsis } from "antd-mobile";
import SexIcon from "./SexIcon";
import SvgIcon from "@/components/SvgIcon";

const iconMap = {
  "icon-a-fenxiang2": "分享海报",
  "icon-wobaomingde03": "申请加精",
  "icon-zhiding": "申请置顶",
  "icon-fuzhilianjie": "复制链接",
};

// 卡片的头部组件
const CardHeader = ({ avatarUrl, name, sex, time, section, content }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-center flex items-center no-select">
      <Avatar
        className="w-[20px] h-[20px] mr-1 rounded-full"
        lazy
        src={avatarUrl}
      />
      {name}&nbsp; <SexIcon sex={sex} />
      |&nbsp;{section}
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
          <Ellipsis direction='end' content={content.text} />
          </div>
          <div className=" ">
            <Grid columns={4} gap={8} className=" m-4">
              <div className="rounded-full bg-slate-100 h-12 w-12 p-2">
                <SvgIcon iconName="zhiding" className="mt-2 ml-1" />
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
  section: PropTypes.string.isRequired, // 新增板块属性
  content: PropTypes.any,
};

export default CardHeader;
