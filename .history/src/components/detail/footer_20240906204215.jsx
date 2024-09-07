import React from "react";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 h-9 w-32 z-10"
        onClick={() => {
          navigate("/");
        }}
      >
        返回
      </Button>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white text-center text-xs text-gray-500 z-10">
        本服务由口袋青年提供
      </div>
    </div>
  );
};
export default Footer;
