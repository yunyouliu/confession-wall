import React from "react";
import { Grid, Image, Swiper, Toast } from "antd-mobile";
import PropTypes from "prop-types";

const data = ["7.6万涉外学子", "45.18万帖子", "192.62万互动"];

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const NavBar = (img) => {
  // 轮播图数据
  const items = img.img.map((img, index) => (
    <Swiper.Item key={index}>
      {/* <div
        className="h-[160px]"
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div> */}
      <Image lazy src={img} alt={img} />
    </Swiper.Item>
  ));

  return (
    <>
      {/* <Grid
        columns={3}
        className=" bg-gray-400 position-fixed p-0 -ml-4 -mt-2 -mr-2 h-5"
      >
        {data.map((item) => {
          return (
            <Grid.Item className=" text-white text-sm ml-8" key={item}>
              {item}
            </Grid.Item>
          );
        })}
      </Grid> */}

      <div className="bg-gray-400  p-0  h-6 text-center  -mt-2 -ml-2  -mr-2 ">
        <div className="flex justify-between items-center w-10/12 mx-auto">
          <span className="text-white text-sm">7.6万涉外学子</span>
          <span className="text-white text-sm">45.18万帖子</span>
          <span className="text-white text-sm">192.62万互动</span>
        </div>
      </div>

      {img.img?.length > 0 && (
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
};

export default NavBar;
