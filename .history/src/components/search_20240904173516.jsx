import {React,useState} from "react";
import { Input } from "antd-mobile";
const Search = () => {
    const [value, setvalue] = useState('')
  return (
    <div>
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </div>
  );
};

export default Search;
