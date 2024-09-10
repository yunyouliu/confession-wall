import { React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ImageViewer } from "antd-mobile";

// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0); // 默认从第0张开始

  const handleClick = (id) => {
    navigate("/detail", { state: { id } });
  };

  return (
    <div className="text-left mt-2 py-2 indent-[20px] text-white text-base">
      <p onClick={() => handleClick(id)}>{text.text}</p>
      <ImageViewer.Multi
        images={text.img}
        visible={visible}
        defaultIndex={index}
        onClose={() => setVisible(false)}
      />
      <div className="mt-2 p-2 grid grid-cols-3 gap-2">
        {/* 遍历text.img数组 图片 */}
        {text.img.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt="图片"
            className="w-full h-auto object-cover rounded-lg"
            onClick={() => {
              setIndex(idx); // 点击时设置当前的图片索引
              setVisible(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 卡片内容组件的属性验证
CardContent.propTypes = {
  text: PropTypes.any.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
