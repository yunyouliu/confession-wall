/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-05 20:50:45
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:17:53
 */
import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon";
const SexIcon = ({ sex,className }) => (
  <SvgIcon iconName={sex === "male" ? "nanxing" : "nvxing"}  className={className} />
);

SexIcon.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  className: PropTypes.string,
};

export default SexIcon;
