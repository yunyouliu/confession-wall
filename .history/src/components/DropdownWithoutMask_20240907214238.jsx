import { useState } from 'react';

const CustomDropdown = ({ children, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* 点击区域，可以自定义内容 */}
      <div
        onClick={toggleDropdown}
        className="cursor-pointer"
      >
        {children}
      </div>

      {/* 下拉内容区域 */}
      {isOpen && (
        <div
          className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {dropdownContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
