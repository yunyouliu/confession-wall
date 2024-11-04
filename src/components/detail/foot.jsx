/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-08 11:43:16
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:19:02
 */
import { React } from "react";
import PropTypes from "prop-types";
import { Checkbox, Button, Avatar } from "antd-mobile";
import SexIcon from "@/components/card/SexIcon";
import SvgIcon from "../SvgIcon";
import { useSelector, useDispatch } from "react-redux";
import { setSelect } from "@/redux/commentSlice";

export default function Foot({
  sex,
  name,
  type,
  avatarUrl,
  handleComment,
  className,
  onclick,
}) {
  const dispatch = useDispatch();
  const { select } = useSelector((state) => state.comment);
  return (
    <div className={`flex items-center mt-4 ${className}`}>
      <Avatar
        src={avatarUrl}
        className="rounded-full w-8 h-8"
        alt="avatar"
        onClick={onclick}
      />
      <span className="mt-2 ml-1 text-lg" onClick={onclick}>
        {name}
      </span>
      <SexIcon className="mt-[11px] ml-1" sex={sex} />
      <SvgIcon iconName="bianji" className="mt-[11px] ml-1" />
      <div className="ml-auto flex items-center h-2">
        <Checkbox
          checked={select}
          onClick={() => dispatch(setSelect(!select))}
          className="mt-1"
        >
          <span
            className={`text-sm  ml-[-4px] ${
              select ? "text-emerald-500" : "text-gray-500"
            }`}
          >
            {select ? "已匿名" : "可匿名"}
          </span>
        </Checkbox>
        <Button
          color="success"
          className="rounded-3xl h-8 ml-2 px-4"
          onClick={() => {
            handleComment();
          }}
        >
          {type === 1 ? "发布" : "评论"}
        </Button>
      </div>
    </div>
  );
}

// 属性验证
Foot.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  handleComment: PropTypes.func.isRequired,
  className: PropTypes.string,
  onclick: PropTypes.func,
};
