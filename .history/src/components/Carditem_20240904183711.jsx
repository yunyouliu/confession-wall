import { React } from "react";
import { Card } from "antd-mobile";


const header=<div>我是头部</div>
const Carditem = () => {
  return (
    <div className="mt-3 ml-2">
      <Card
        className="bg-purple-300"
        title={header}
        onClick={() => {}}
      >
        <div>content</div>
      </Card>
    </div>
  );
};

export default Carditem;
