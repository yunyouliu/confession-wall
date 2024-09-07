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
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji);
  };

  return (
    <div className="relative p-2 bg-[#fde5e9] shadow-md">
      {/* 输入框 */}
      <div className="bg-white rounded-md relative">
        <TextArea
          value={text}
          onChange={(val) => setText(val)}
          placeholder="想回点什么呢~"
          showCount
          maxLength={2000}
          autoSize={{ minRows: 2, maxRows: 5 }}
          className="pr-16" // 留出右侧空间给按钮
        />
        {/* 表情选择区域 */}
        <div className="absolute top-2 right-2 flex flex-wrap gap-2">
          {data.map((emoji, index) => (
            <img
              className="w-6 h-6 cursor-pointer"
              src={emoji.url}
              key={index}
              alt={emoji.description}
              onClick={() => handleEmojiSelect(emoji.description)}
            />
          ))}
        </div>
        {/* 评论按钮 */}
        <Button
          color="success"
          className="absolute bottom-2 right-2 rounded-3xl"
        >
          评论
        </Button>
      </div>

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
        </div>
      </div>
    </div>
  );
};

EmojiSelector.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default EmojiSelector;
