import React from "react";
import { Footer, Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // console.log("点击了卡片内容");
    navigate("/detail", { state: { id } });
  };
  return (
    <div>
      <Button className=" h-9 w-full  bottom-[-170px]" onClick={() => {}}>
        返回
      </Button>
      {/* <Footer
          label={
            <div className='fixed bottom-0'>
               蚂蚁财富
            </div>
          }
        ></Footer> */}
    </div>
  );
};
export default footer;
