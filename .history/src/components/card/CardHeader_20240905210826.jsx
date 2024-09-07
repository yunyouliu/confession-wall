import {React,useState} from "react";
import PropTypes from "prop-types";
import { Avatar, Popup } from "antd-mobile";
import SexIcon from "./SexIcon";
// 卡片的头部组件
const CardHeader = ({ avatarUrl, name, sex, time, section }) => {
  const [visible, setvisible] = useState(false)
  return (
    <div className="text-center flex items-center">
      <Avatar className="w-[20px] h-[20px] mr-1 rounded-full" src={avatarUrl} />
      {name}&nbsp; <SexIcon sex={sex} />
      |&nbsp;{section}
      <div className="ml-auto flex items-center" onClick={() => {}}>
        <span className="text-xs">{time}</span>
        <svg className="icon ml-2" aria-hidden="true">
          <use xlinkHref="#icon-gengduo"></use>
        </svg>
      </div>
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
      ></Popup>
    </div>
  );
};

CardHeader.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  time: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired, // 新增板块属性
};

export default CardHeader;
