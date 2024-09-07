import React from "react";
import { Grid, Swiper, Toast } from "antd-mobile";

const data = ["7.6万涉外学子", "45.18万帖子", "192.62万互动"];

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const img = [
  "https://img.qiqi.pro/x/clzigc5up0x7k12tc78b2awdv.jpg?_s=1325x563",
  "https://img.qiqi.pro/x/clz9wfes90o9v12tc62s9ep1x.png?_s=1325x563",
  'https://img.qiqi.pro/x/clz72qvax0kcm12tcch4fa67z.png?_s=1325x563',
    'https://img.qiqi.pro/x/clz9wfes90o9v12tc62s9ep1x.png?_s=1325x563'

];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className="h-[160px]"
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
      <Grid
        columns={3}
        gap={9}
        className="w-full bg-slate-400 position-fixed top-0"
      >
        {data.map((item) => {
          return <Grid.Item key={item}>{item}</Grid.Item>;
        })}
      </Grid>
      <Swiper
        loop
        autoplay
        className="h-[160px] mt-5"
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
