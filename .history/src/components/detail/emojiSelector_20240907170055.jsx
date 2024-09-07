import React, { useState } from "react";
import { TextArea, Checkbox, Button } from "antd-mobile";
import SexIcon from "../card/SexIcon";
import SvgIcon from "../SvgIcon";
import PropTypes from "prop-types";
import jsonData from "../../assets/emoji.json";

const data = [
  {
    description: "[看]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211607559dcc9ca9a.png",
  },
  {
    description: "[流泪]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211601408cebcaa10.png",
  },
  {
    description: "[求求了]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142716823ee1a7199.png",
  },
  {
    description: "[猪头]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211605253f12c17c3.png",
  },
  {
    description: "[偷笑]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/1823354067401bf7445.png",
  },
  {
    description: "[送心]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/242116223295fc5d347.png",
  },
  {
    description: "[躺平]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142718335e95f861e.png",
  },
  {
    description: "[宕机]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/182335428430e299cc3.png",
  },
  {
    description: "[尬笑]",
    url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211532837e07cb990.png",
  },
];

const EmojiSelector = ({ sex, name, avatarUrl }) => {
  // 输入框内容状态
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  // 处理 emoji 选择
  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji); // 将选中的表情符号插入到文本框中
  };

  return (
    <div className="p-2 bg-[#fde5e9] shadow-md">
      {/* 输入框 */}
      <div className="bg-white rounded-md">
        <TextArea
          value={text}
          onChange={(val) => setText(val)}
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 2 }}
        />
        {/* 按扭区 */}
        <div className="grid grid-cols-10 w-80 ml-2">
          {data.map((emoji, index) => (
            <img
              className="w-6 h-6  mr-2 mb-2 "
              src={emoji.url}
              key={index}
              alt={emoji.description}
              onClick={() => handleEmojiSelect(emoji.description)}
            />
          ))}
          <svg
            t="1725699551370"
            className="icon"
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2781"
            width="200"
            height="200"
          >
            <path d="M512.016 1024C229.232 1024 0.016 794.784 0.016 512 0.016 229.216 229.232 0 512.016 0 794.784 0 1024 229.216 1024 512 1024 794.784 794.784 1024 512.016 1024ZM512.016 64C264.976 64 64.016 264.96 64.016 512 64.016 759.024 264.976 960 512.016 960 759.04 960 960 759.024 960 512 960 264.96 759.04 64 512.016 64ZM510.336 833.456C509.056 833.456 507.744 833.488 506.448 833.488 310.992 833.488 229.024 657.12 225.616 649.552 218.336 633.424 225.488 614.496 241.584 607.216 257.712 599.968 276.576 607.088 283.888 623.088 286.64 629.12 352.928 769.488 506.576 769.488 507.584 769.488 508.576 769.456 509.584 769.456 672.896 767.552 738.368 624.768 739.024 623.344 746.176 607.216 765.024 599.872 781.264 607.152 797.392 614.336 804.672 633.248 797.456 649.408 794.176 656.8 714.208 831.056 510.336 833.456ZM671.504 479.84C636.224 479.84 607.664 451.232"></path>
          </svg>
        </div>
      </div>

      {/* 表情弹出区 */}
      {/* <div className="flex flex-wrap mt-2 columns-4 w-70  ml-4 h-40 overflow-auto bg-white">
        {jsonData.map((emoji, index) => (
          <img
            className="w-8 h-8 mr-2 mb-2"
            src={emoji.url}
            key={index}
            alt={emoji.name}
            onClick={() => handleEmojiSelect(emoji.description)}
          />
        ))}
      </div> */}
      {/* 底部栏 */}
      <div className="flex items-center mt-4">
        <img src={avatarUrl} className="rounded-full w-8 h-8" alt="avatar" />
        <span className="mt-2 ml-1">{name}</span>
        <SexIcon className="mt-[11px] ml-1" sex={sex} />
        <SvgIcon iconName="bianji" className="mt-[11px] ml-1" />
        <div className="ml-auto flex items-center h-2">
          <Checkbox
            checked={checked}
            onClick={() => setChecked(!checked)}
            className="mt-1"
          >
            <span className="text-sm text-gray-500 ml-[-4px]">
              {checked ? "已匿名" : "可匿名"}
            </span>
          </Checkbox>
          <Button color="success" className="rounded-3xl h-8 ml-2 px-4">
            评论
          </Button>
        </div>
      </div>
    </div>
  );
};

// 属性验证
EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default EmojiSelector;
