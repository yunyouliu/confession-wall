import { React, useState,useEffect,useRef} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ImageViewer } from "antd-mobile";
import jsonData from "../../assets/emoji.json"; // 引入 emoji 数据
import tabEmoji from "../../assets/tabEmoji.json"; // 引入 tabEmoji 数据

const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // 默认从第0张开始
  const [isExpanded, setIsExpanded] = useState(false); // 控制文本展开/收起
  const [isOverflowing, setIsOverflowing] = useState(false); // 是否内容溢出

  const mergedEmojiData = [...jsonData, ...tabEmoji];

  const handleClick = (id) => {
    navigate("/detail", { state: { id } });
  };

  const getFlexClasses = (imgLength) => {
    switch (imgLength) {
      case 1:
        return "flex flex-col";
      case 2:
        return "flex flex-row justify-between";
      case 3:
        return "flex flex-row justify-between";
      default:
        return "flex flex-wrap justify-between";
    }
  };

  const showImages = (startIndex) => {
    ImageViewer.Multi.show({
      images: text.img,
      defaultIndex: startIndex,
    });
  };

  const parseTextWithEmoji = (contentText) => {
    return contentText.split(/(\[.*?\])/).map((part, idx) => {
      const match = part.match(/\[(.*?)\]/);
      if (match) {
        const description = match[1];
        const emoji = mergedEmojiData.find((emoji) => emoji.description === `[${description}]`);
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

  // 检查文本是否溢出
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      const isContentOverflowing =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflowing(isContentOverflowing);
    }
  }, []);

  return (
    <div className="text-left mt-2 py-2 indent-[20px] text-white text-base">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all ${
          isExpanded ? "max-h-none" : "max-h-[180px]" // 100px 高度限制
        }`}
      >
        <p onClick={() => handleClick(id)}>{parseTextWithEmoji(text.text)}</p>
      </div>

      {/* 如果内容溢出，显示展开/收起按钮 */}
      {isOverflowing && (
        <button
          className="text-blue-500 mt-2"
          onClick={handleToggleExpand}
        >
          {isExpanded ? "收起" : "展开剩下内容"}
        </button>
      )}

      <div className={`mt-2 p-2 ${getFlexClasses(text.img.length)}`}>
        {text.img.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt="图片"
            className={`object-cover rounded-lg mb-2 ${
              text.img.length === 1
                ? "w-full aspect-[5/6]"
                : text.img.length === 2
                ? "w-[49%] aspect-[3/3]"
                : text.img.length === 3
                ? "w-[32%] aspect-[4/3]"
                : "w-[32%] aspect-[4/3]"
            }`}
            onClick={() => showImages(idx)}
          />
        ))}
      </div>
    </div>
  );
};

CardContent.propTypes = {
  text: PropTypes.any.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
