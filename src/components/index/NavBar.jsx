/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 13:03:47
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-06 15:06:47
 */
import React from "react";
import { Image, Swiper, Toast } from "antd-mobile";
import PropTypes from "prop-types";

const NavBar = ({ img, total }) => {
  // 轮播图数据
  const items = img?.map((item, index) => (
    <Swiper.Item key={index}>
      <Image lazy src={item.img} alt={item.img} />
    </Swiper.Item>
  ));

  return (
    <>
      <div className="bg-gray-400  p-0  h-6 text-center  -mt-2 -ml-2  -mr-2 ">
        <div className="flex justify-between items-center w-10/12 mx-auto">
          <span className="text-white text-sm">
            {total.userTotal}万涉外学子
          </span>
          <span className="text-white text-sm">{total.essayTotal}万帖子</span>
          <span className="text-white text-sm">
            {total.commentFormTotal}万互动
          </span>
        </div>
      </div>

      {img?.length > 0 && (
        <Swiper
          loop
          autoplay
          className="h-[140px] mt-3"
          indicatorProps={{
            color: "white",
          }}
          defaultIndex={1}
        >
          {items}
        </Swiper>
      )}
    </>
  );
};

NavBar.propTypes = {
  img: PropTypes.array,
  total: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default NavBar;
