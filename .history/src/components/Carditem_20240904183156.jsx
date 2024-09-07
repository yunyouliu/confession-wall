import { React } from "react";
import { Card } from "antd-mobile";
const Carditem = () => {
  return (
    <div className="card">
      <Card title="标题" onClick={()=>{}}>
        content
      </Card>
    </div>
  );
};

export default Carditem;
