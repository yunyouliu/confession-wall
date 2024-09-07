import React from "react";
import { Grid, Swiper, Toast } from "antd-mobile";

const data = ["7.6万涉外学子", "45.18万帖子", "192.62万互动"];

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className="h-80"
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));
const NavBar = () => {
  return (
    <>
      {/* <Grid columns={3} gap={9} className="m-8">
        {data.map((item) => {
          return <Grid.Item key={item}>{item}</Grid.Item>;
        })}
      </Grid> */}
      <Swiper
      className="h-[200px]"
        indicatorProps={{
          color: "white",
        }}
        defaultIndex={1}
      >
        {items}
      </Swiper>
    </>
  );
};

export default NavBar;
