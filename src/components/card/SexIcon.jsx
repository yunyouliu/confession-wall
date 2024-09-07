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
