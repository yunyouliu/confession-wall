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
      >
        <Button className="float-right"></Button>
      </Input>
    </div>
  );
};

export default Search;
