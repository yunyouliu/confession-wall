import { React, useState } from "react";
import { Button, Image, SearchBar } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
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
        className="ml-2 mt-2"
      />
      {/* <Button
        shape="rounded"
        color="success"
        className="float-right mt-[-30px] h-7 "
      >
        搜索
      </Button> */}

      <div className="bg-[#fde5e9] mr-0.5 mt-4 ml-2 rounded-md h-[30px] text-center flex leading-9 ">
        <Image
          className="ml-2 w-full mt-1"
          width={25}
          height={25}
          fit="contain"
          src="data:image/png;base64,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"
        />
        买电脑 别去什么安哲之类的公司，价格高于市场... <RightOutline className="mt-2 ml-2"/>
      </div>
    </div>
  );
};

export default Search;
