import { React } from "react";
import { Card, Avatar } from "antd-mobile";

const header = (
  <div>
    <div className="text-center">
      <Avatar src="https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y" />
    </div>
  </div>
);
const Carditem = () => {
  return (
    <div className="mt-3 ml-2">
      <Card className="bg-purple-300" title={header} onClick={() => {}}>
        <div>content</div>
      </Card>
    </div>
  );
};

export default Carditem;
