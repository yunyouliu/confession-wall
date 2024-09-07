import { React, useState } from "react";
import { Button, SearchBar } from "antd-mobile";
const Search = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
      
      <SearchBar
        placeholder="想搜点什么呢~"
        value={value}
        onChange={(val) => {
          setvalue(val);
        }}
        className="ml-2 mt-4"
      />
      <Button
        shape="rounded"
        color="success"
        className="float-right mt-[-30px] h-7 "
      >
        搜索
      </Button>

      <div></div>
    </div>
  );
};

export default Search;
