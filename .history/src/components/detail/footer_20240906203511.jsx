import React from "react";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className=" h-9 w-full  bottom-[-150px] text-center mx-auto"
        onClick={() => {
          navigate("/");
        }}
      >
        返回
      </Button>
      <div className="object-bottom">
        本服务由口袋青年提供
      </div>
    </div>
  );
};
export default Footer;
