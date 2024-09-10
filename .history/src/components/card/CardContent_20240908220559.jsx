import { React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ImageViewer } from "antd-mobile";

// const content = {
//   text: "这是卡片的内容[看]",
//   img: [
//     "https://img.qiqi.pro/x/cm0s8as291jrgz1tc5w2fb6qf.jpeg?_s=2196x3904",
//     "https://img.qiqi.pro/x/cm0s8ap8y1jrbz1tcbebn5glm.jpeg?_s=2256x4009",
//     "https://img.qiqi.pro/x/cm0s8ahdi1jqzz1tcek208nsd.jpeg?_s=2311x4110",
//   ],
// };
// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  const [visble, setVisble] = useState(false);

  const handleClick = (id) => {
    // console.log("点击了卡片内容");
    navigate("/detail", { state: { id } });
  };

  return (
    <div className="text-left mt-2 indent-[20px] text-white text-base">
      <p onClick={() => handleClick(id)}>{text.text}</p>
      <div className="mt-2 p-2 grid grid-cols-3 gap-3 justify-between">
        {/* 遍历text.img数组 图片 */}
        <ImageViewer.Multi
          images={text.img}
          visible={visble}
          defaultIndex={1}
          onClose={() => {
            setVisble(false);
          }}
        />
        {text.img.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="图片"
            className="w-20 h-20 object-fit rounded-lg"
            onClick={() => {
              setVisble(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 卡片内容组件的属性验证
CardContent.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
