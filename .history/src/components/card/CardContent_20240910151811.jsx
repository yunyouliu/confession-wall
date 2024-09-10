import { React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { ImageViewer } from "antd-mobile";
import jsonData from "../../assets/emoji.json"; // 引入 emoji 数据
import tabEmoji from "../../assets/tabEmoji.json"; // 引入 tabEmoji 数据

const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardRef = useRef(null);  // 为卡片设置 ref
  const [isExpanded, setIsExpanded] = useState(false); // 控制文本展开/收起
  const [isOverflowing, setIsOverflowing] = useState(false); // 是否内容溢出

  // 记录滚动位置
  const handleClick = (id) => {
    sessionStorage.setItem('scrollPosition', cardRef.current.offsetTop); // 记录当前位置
    navigate("/detail", { state: { id } });
  };

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition)); // 返回时滚动到记录的位置
    }
  }, []);

  const parseTextWithEmoji = (contentText) => {
    const mergedEmojiData = [...jsonData, ...tabEmoji];
    return contentText.split(/(\[.*?\])/).map((part, idx) => {
      const match = part.match(/\[(.*?)\]/);
      if (match) {
        const description = match[1];
        const emoji = mergedEmojiData.find(
          (emoji) => emoji.description === `[${description}]`
        );
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
      return <span key={idx}>{part}</span>;
    });
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={cardRef} className="text-left mt-2 indent-[20px] text-white text-base">
      <div className={`overflow-hidden transition-all ${isExpanded ? "max-h-none" : "max-h-[187px]"}`}>
        <p onClick={() => handleClick(id)}>{parseTextWithEmoji(text.text)}</p>
      </div>
      {isOverflowing && (
        <div className="text-white text-center w-20 text-sm border-2 border-white mt-2" onClick={handleToggleExpand}>
          {isExpanded ? "收起内容↑" : "展开内容↓"}
        </div>
      )}
    </div>
  );
};

CardContent.propTypes = {
  text: PropTypes.any.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
