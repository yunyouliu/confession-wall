/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-15 17:55:49
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:15:50
 */
import React, { useCallback, useRef } from "react";
import Captcha from "react-captcha-code";
import PropTypes from "prop-types";

export const Code = ({ code }) => {
  const handleChange = useCallback((captcha) => {
    console.log("captcha:", captcha);
  }, []);

  const captchaRef = useRef();

  const handleClick = () => {
    // 刷新验证码
    captchaRef.current.refresh();
  };

  return (
    <>
      <Captcha
        code={code}
        ref={captchaRef}
        charNum={4}
        onChange={handleChange}
        onClick={handleClick}
      />
    </>
  );
};

// 属性验证
Code.propTypes = {
  code: PropTypes.string.isRequired,
};
