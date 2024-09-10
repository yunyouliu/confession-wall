import { React, useState } from "react";
import { Tabs, Button } from "antd-mobile";

const Commentitem = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
    <div className="mt-4">
     <Tabs>
      <Tabs.Tab title="最新评论" key="0"/>
      <Tabs.Tab title="最早评论" key="1"/>
     </Tabs>
    </div>
    </div>
  );
};

export default Commentitem;
