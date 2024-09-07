import { React, useState } from "react";
import { Button, Input } from "antd-mobile";
const Search = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
      <Input
        className=" mt-4 bg-white h-8 ml-2 mr-2"
        placeholder="想搜点什么呢~"
        value={value}
        onChange={(val) => {
          setvalue(val);
        }}
      ></Input>
      <Button shape="rounded" className="float-right mt-[-34px] ">搜索</Button>
    </div>
  );
};

export default Search;
