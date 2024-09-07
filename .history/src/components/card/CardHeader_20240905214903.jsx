import { React, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Popup,Grid,Button} from "antd-mobile";
import SexIcon from "./SexIcon";
// 卡片的头部组件
const CardHeader = ({ avatarUrl, name, sex, time, section, content }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-center flex items-center">
      <Avatar className="w-[20px] h-[20px] mr-1 rounded-full" src={avatarUrl} />
      {name}&nbsp; <SexIcon sex={sex} />
      |&nbsp;{section}
      <div
        className="ml-auto flex items-center"
        onClick={() => {
          setVisible(true);
        }}
      >
        <span className="text-xs">{time}</span>
        <svg className="icon ml-2" aria-hidden="true">
          <use xlinkHref="#icon-gengduo"></use>
        </svg>
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
            {content.slice(0, 18)}...
          </div>
          <div className="mt-4">
            <Grid  columns={4} gap={8} className="p-4 m-3">
              <div className="rounded-full bg-slate-100 h-12 w-12">
              
              </div>
              <div className="rounded-full bg-slate-100 h-12 w-12">
              
              </div>
              <div className="rounded-full bg-slate-100 h-12 w-12">
              
              </div>
              <div className="rounded-full bg-slate-100 h-12 w-12">
              
              </div>
            </Grid>
            <Button className="w-full mt-2">取消</Button>
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
  content: PropTypes.string,
};

export default CardHeader;
