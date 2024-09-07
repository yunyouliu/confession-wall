import { React, useState } from "react";
import { Button, SearchBar} from "antd-mobile";
const Search = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
       <SearchBar icon={} placeholder='请输入内容' />
      <Button shape="rounded" color="success" className="float-right mt-[-30px] h-7 ">搜索</Button>

      <div></div>
    </div>
  );
};

export default Search;
