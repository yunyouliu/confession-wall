import { useState } from "react";
import PropTypes from "prop-types";

const CustomDropdown = ({ item, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* 点击区域，可以自定义内容 */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {item}
      </div>

      {/* 下拉内容区域 */}
      {isOpen && (
        <div className="">
          <div className="py-1">{dropdownContent}</div>
        </div>
      )}
    </div>
  );
};

// 属性验证
CustomDropdown.propTypes = {
  item: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
};

export default CustomDropdown;