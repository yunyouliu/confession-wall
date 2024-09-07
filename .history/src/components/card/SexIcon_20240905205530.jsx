import React from 'react'
import PropTypes from 'prop-types'
const SexIcon = ({ sex }) => (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={sex === "male" ? "#icon-nanxing" : "#icon-nvxing"}></use>
    </svg>
  );
  
  SexIcon.propTypes = {
    sex: PropTypes.oneOf(["male", "female"]).isRequired,
  }

export default  SexIcon