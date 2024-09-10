import { React, useState } from "react";
import { Tabs } from "antd-mobile";

const Commentitem = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="mt-4 bg-white rounded-lg w-[90%]  mx-auto">
        <Tabs>
          <Tabs.Tab title="最新评论" key="0" />
          <Tabs.Tab title="最早评论" key="1" />
        </Tabs>
        
      </div>
    </div>
  );
};

export default Commentitem;
