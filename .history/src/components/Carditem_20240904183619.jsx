import { React } from "react";
import { Card } from "antd-mobile";
const Carditem = () => {
  return (
    <div className="mt-3 ml-2">
      <Card
        className="bg-purple-300"
        title={<span>我是标题</span>}
        onClick={() => {}}
      >
        <div>content</div>
      </Card>
    </div>
  );
};

export default Carditem;
