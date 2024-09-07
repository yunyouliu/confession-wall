import { React, useState } from "react";
import { Input } from "antd-mobile";
const Search = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
      <Input
        className=" mt-4 bg-white h-8 ml-2 "
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
