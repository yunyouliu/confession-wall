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

  // 根据图片数量动态设置布局样式
  const getGridClasses = (imgLength) => {
    switch (imgLength) {
      case 1:
        return "grid-cols-1"; // 一张图片不缩放，单列显示
      case 2:
        return "grid-cols-2"; // 两张图片，分两列，缩放一点
      case 3:
        return "grid-cols-3"; // 三张图片，三列显示
      default:
        return "grid-cols-3"; // 超过三张图片，默认三列显示
    }
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
      <div className={`mt-2 p-2 grid gap-2 ${getGridClasses(text.img.length)}`}>
        {/* 遍历text.img数组 图片 */}
        {text.img.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt="图片"
            className={`object-cover rounded-lg ${
              text.img.length === 1
                ? "w-full h-auto"
                : text.img.length === 2
                ? "w-full h-[calc(50vh)]" // 两张图片时稍微缩放
                : "w-full h-[calc(33vh)]" // 三张及以上时缩放更多
            }`}
            onClick={() => {
              setIndex(idx); // 设置当前的图片索引
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
