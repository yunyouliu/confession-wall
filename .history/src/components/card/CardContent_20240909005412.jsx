import { React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ImageViewer } from "antd-mobile";
import jsonData from "../../assets/emoji.json"; // 引入 emoji 数据

// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // 默认从第0张开始

  const handleClick = (id) => {
    navigate("/detail", { state: { id } });
  };

  // 动态调整图片的宽高
  const getFlexClasses = (imgLength) => {
    switch (imgLength) {
      case 1:
        return "flex flex-col"; // 一张图片时占满整个宽度
      case 2:
        return "flex flex-row justify-between"; // 两张图片时水平排列，稍微缩放
      case 3:
        return "flex flex-row justify-between"; // 三张图片时水平排列，缩放更多
      default:
        return "flex flex-wrap justify-between"; // 超过三张时，自动换行
    }
  };

  // 使用 ImageViewer.show() 来手动展示图片
  const showImages = (startIndex) => {
    ImageViewer.Multi.show({
      images: text.img,
      defaultIndex: startIndex,
    });
  };

  // 替换文本中的 [description] 为对应的 emoji 图片
  const parseTextWithEmoji = (contentText) => {
    // 使用正则表达式匹配形如 [description] 的占位符
    return contentText.split(/(\[.*?\])/).map((part, idx) => {
      const match = part.match(/\[(.*?)\]/);
      if (match) {
        const description = match[1];
        // 查找 emoji 对象
        const emoji = jsonData.find((emoji) => emoji.description === `[${description}]`);
        if (emoji) {
          return (
            <img
              key={idx}
              src={emoji.url}
              alt="emoji"
              className="inline-block w-6 h-6 align-text-bottom"
            />
          );
        }
      }
      // 其他文本内容保持不变
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="text-left mt-2 py-2 indent-[20px] text-white text-base">
      <p onClick={() => handleClick(id)}>{parseTextWithEmoji(text.text)}</p>
      <div className={`mt-2 p-2 ${getFlexClasses(text.img.length)}`}>
        {/* 遍历text.img数组 图片 */}
        {text.img.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt="图片"
            className={`object-cover rounded-lg mb-2 ${
              text.img.length === 1
                ? "w-full aspect-[7/3]" // 一张图片时占满整个宽度，高度按4:3比例缩放
                : text.img.length === 2
                ? "w-[49%] aspect-[4/3]" // 两张图片时各占一半，保持4:3比例
                : text.img.length === 3
                ? "w-[32%] aspect-[4/3]" // 三张图片时各占三分之一，保持4:3比例
                : "w-[32%] aspect-[4/3]" // 三张以上图片时，也各占三分之一
            }`}
            onClick={() => showImages(idx)} // 点击图片时显示大图
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
