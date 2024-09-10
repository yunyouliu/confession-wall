import { React, useState } from "react";
import { Tabs, Button } from "antd-mobile";

const Commentitem = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="mt-4">
      <div
        onClick={() => setActiveTab()} // 点击时设置 activeTab
        className={`cursor-pointer px-4 py-2 mx-2 ${
          activeTab === index
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500"
        }`}
      >
        
      </div>
    </div>
  );
};

export default Commentitem;
