import { React, useState } from "react";
import { Tabs, Button } from "antd-mobile";

const Commentitem = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-4">
     <Tabs>
      <Tabs.Tab title="全部" key="0"/>
     </Tabs>
    </div>
  );
};

export default Commentitem;
