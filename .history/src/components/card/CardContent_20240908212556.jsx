import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const content = {
  text: "这是卡片的内容[看]",
  img: [
    "https://act-webstatic.mihoyo.com/puzzle/hk4e/pz_NVrFmv8SzH/resource/puzzle/2024/08/20/4830a1c0b6598be850b1061846ff8443_5991853130258931225.png?x-oss-process=image/format,webp/quality,Q_90",
  ]
}
// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // console.log("点击了卡片内容");
    navigate("/detail", { state: { id } });
  };

  return (
    <div
      className="text-left mt-2 indent-[20px] text-white text-base"
      onClick={() => handleClick(id)} // 使用箭头函数包装
    >
      {content.map((item, index)=>{
        return (<p key={index}>{item.text}</p>)
      })}
    </div>
  );
};

// 卡片内容组件的属性验证
CardContent.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
