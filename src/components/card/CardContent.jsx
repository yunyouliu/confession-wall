/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-05 20:51:14
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 19:22:22
 */
// src/CardContent.jsx

import { React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ImageViewer, Image } from "antd-mobile";
import jsonData from "../../assets/emoji.json"; // 引入 emoji 数据
import tabEmoji from "../../assets/tabEmoji.json"; // 引入 tabEmoji 数据

const CardContent = ({ text, id, onclick }) => {
  const [index, setIndex] = useState(0); // 默认从第0张开始
  const [isExpanded, setIsExpanded] = useState(false); // 控制文本展开/收起
  const [isOverflowing, setIsOverflowing] = useState(false); // 是否内容溢出

  const mergedEmojiData = [...jsonData, ...tabEmoji];

  const [rotations, setRotations] = useState({});

  const getFlexClasses = (imgLength) => {
    switch (imgLength) {
      case 1:
        return "flex flex-col";
      case 2:
        return "flex flex-row justify-between";
      case 3:
        return "flex flex-row justify-between";
      default:
        return "flex flex-wrap";
    }
  };

  // const getImageWidth = (imgLength) => {
  //   if (imgLength === 1) return "100%"; // 单张图片占满
  //   if (imgLength % 3 === 0) return "32%"; // 三张一行
  //   if (imgLength % 2 === 0) return "48%"; // 两张一行
  //   return "32%"; // 默认三张一行
  // };

  const getImageStyle = (imgLength) => {
    if (imgLength === 1) {
      return {
        width: "100%",
        maxHeight: "400px", // 单张图片的最大高度
        objectFit: "contain", // 完整展示
      };
    }
    if (imgLength === 2 || imgLength === 4) {
      return {
        width: "48%", // 两张一行时更宽
        height: "200px", // 缩略图高度
        objectFit: "cover", // 裁剪以充满容器
        objectPosition: "cover", // 以中心裁剪
      };
    }
    return {
      width: "32%", // 多于4张时三张一行
      height: "200px", // 缩略图高度
      objectFit: "cover", // 裁剪以充满容器
      objectPosition: "center", // 以中心裁剪
    };
  }
  const showImages = (index) => {
    ImageViewer.Multi.show({
      images: text.img,
      defaultIndex: index,
    });
  };

  const parseTextWithEmoji = (contentText) => {
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

  // 检查文本是否溢出
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      const isContentOverflowing =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflowing(isContentOverflowing);
    }
  }, []);

  if (!text || !text.text) {
    return null;
  }

  return (
    <div className="text-left mt-2 indent-[20px] text-white text-base">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all ${isExpanded ? "max-h-none" : "max-h-[187px]"
          }`}
        // 由外部传递的 onclick 控制点击事件
        // 如果有传递id，则使用传递的 onclick，否则不执行任何操作
        onClick={onclick ? () => onclick(id) : undefined}
      >
        {parseTextWithEmoji(text.text)}
      </div>

      {isOverflowing && (
        <div
          className="text-white border-dashed text-center w-20 text-sm indent-0 ml-2 border-2 border-white mt-2"
          onClick={handleToggleExpand}
        >
          {isExpanded ? "收起内容↑" : "展开内容↓"}
        </div>
      )}

      {text.img && text.img.length > 0 && (
        // 方案一
        // <div className={`mt-2 p-2 ${getFlexClasses(text.img.length)}`}>
        //   {text.img.map((item, idx) => (
        //     <Image
        //       lazy
        //       key={idx}
        //       src={item}
        //       alt="图片"
        //       className={`object-cover rounded-lg mb-2 ${
        //         text.img.length === 1
        //           ? "w-full aspect-[5/6]"
        //           : text.img.length === 2
        //           ? "w-[49%] aspect-[3/3]"
        //           : text.img.length === 3
        //           ? "w-[32%] aspect-[4/3]"
        //           : "w-[32%] aspect-[4/3]"
        //       }`}
        //       onClick={(event) => {
        //         event.stopPropagation(); // 阻止事件冒泡
        //         showImages(idx);
        //       }}
        //     />
        //   ))}
        // </div>

        // 方案二
        // <div className={`mt-2 p-2 ${getFlexClasses(text.img.length)}`}>
        //   {text.img.map((item, idx) => (
        //     <Image
        //       lazy
        //       key={idx}
        //       src={item}
        //       alt="图片"
        //       className={`object-cover rounded-lg mb-2 ${
        //         text.img.length === 1
        //           ? "w-full aspect-[5/6]"
        //           : text.img.length === 2
        //           ? "w-[49%]"
        //           : "w-[32%]"
        //       }`}
        //       style={{
        //         aspectRatio: "auto", // 自动根据图片尺寸调整比例
        //         objectFit: "cover", // 填充容器并裁剪多余部分
        //       }}
        //       onClick={(event) => {
        //         event.stopPropagation(); // 阻止事件冒泡
        //         showImages(idx);
        //       }}
        //     />
        //   ))}
        // </div>

        // 方案三 缩略图
        <div className="text-left mt-2 indent-[20px] text-white text-base">
          {text.img && text.img.length > 0 && (
            <div
              className="mt-2 p-2 flex flex-wrap justify-start gap-1 "
              style={{ rowGap: "12px" }} // 控制行间距
            >
              {text.img.map((item, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg"
                  style={{
                    ...getImageStyle(text.img.length), // 根据图片数量动态调整
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    showImages(idx); // 点击展示大图
                  }}
                >
                  <Image
                    lazy
                    src={item}
                    alt="图片"
                    className="w-full h-full" // 填满容器
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        // 方案四
        // <div className={`mt-2 p-2 ${getFlexClasses(text.img.length)}`}>
        //   {text.img.map((item, idx) => (
        //     <Image
        //       lazy
        //       key={idx}
        //       src={item}
        //       alt="图片"
        //       className={`object-cover rounded-lg mb-2 ${
        //         text.img.length === 1 ? "w-full aspect-[5/6]" : "w-[32%] h-32" // 缩略图大小为固定方形
        //       }`}
        //       style={{
        //         transform: rotations[idx] ? "rotate(90deg)" : "none",
        //         objectFit: "cover", // 保证填充比例
        //         maxWidth: rotations[idx] ? "100%" : "auto",
        //         maxHeight: rotations[idx] ? "100%" : "auto",
        //       }}
        //       onLoad={(event) => handleImageLoad(idx, event)}
        //       onClick={(event) => {
        //         event.stopPropagation();
        //         showImages(idx);
        //       }}
        //     />
        //   ))}
        // </div>
      )}
    </div>
  );
};

CardContent.propTypes = {
  text: PropTypes.any.isRequired,
  id: PropTypes.number,
  onclick: PropTypes.func, // 确保 onclick 是必需的
};

export default CardContent;
