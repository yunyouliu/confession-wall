import React from 'react';
 import PropTypes from 'prop-types';
const CustomDropdown = ({ isOpen, dropdownContent }) => {
  return (
    <div className="relative inline-block text-left">
      {/* 下拉内容区域 */}
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{dropdownContent}</div>
        </div>
      )}
    </div>
  );
};

// 属性验证
 CustomDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropdownContent: PropTypes.node.isRequired,
};

export default CustomDropdown;
