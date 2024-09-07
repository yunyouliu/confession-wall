import { React, useState } from "react";
import { Input } from "antd-mobile";
const Search = () => {
  const [value, setvalue] = useState("");
  return (
    <div className=" mt-4 bg-white h-8 pl-2 pr-2">
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(val) => {
          setvalue(val);
        }}
      />
    </div>
  );
};

export default Search;
