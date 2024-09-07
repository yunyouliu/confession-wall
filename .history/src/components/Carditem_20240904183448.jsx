import { React } from "react";
import { Card } from "antd-mobile";
const Carditem = () => {
  return (
    <div className="card">
      <Card title={<span>我是标题</span>} onClick={() => {}}>
        <div>content</div>
      </Card>
    </div>
  );
};

export default Carditem;
