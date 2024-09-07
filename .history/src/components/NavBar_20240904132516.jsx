import React from "react";
import { Grid } from "antd-mobile";

const data = ["7.6万涉外学子", "
45.18万帖子
", "C"];
const NavBar = () => {
  return (
    <>
      <Grid columns={3} gap={4}>
        {data.map((item) => {
          return <Grid.Item key={item}>{item}</Grid.Item>;
        })}
      </Grid>
    </>
  );
};

export default NavBar;
