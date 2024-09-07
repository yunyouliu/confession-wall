import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon";
const SexIcon = ({ sex }) => (

  <SvgIcon iconName={sex === "male" ? "nanxing" : "nvxing"} />
);

SexIcon.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
};

export default SexIcon;
