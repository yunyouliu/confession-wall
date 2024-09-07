import React from "react";
import { Input, Button } from "antd-mobile";
const Picker = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Input
        placeholder="想回复点什么呢~"
        value={1}
        onChange={() => {}}
        clearable
      />
      <Button color="primary" style={{ marginTop: "10px" }} onClick={() => {}}>
        返回
      </Button>
    </div>
  );
};

export default Picker;
