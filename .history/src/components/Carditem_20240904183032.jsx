import { React } from "react";
import { Card } from "antd-mobile";
const Carditem = () => {
  return (
    <div className="card">
      <Card title="卡片标题" onClick={()=>{}}>
        卡片内容
      </Card>
    </div>
  );
};

export default Carditem;
