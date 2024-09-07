import React from "react";
import { Grid } from "antd-mobile";

const data = ["7.6万涉外学子", "45.18万帖子", "192.62万互动"];
const NavBar = () => {
  return (
    <>
      <Grid columns={3} gap={9} className="m-8">
        {data.map((item) => {
          return <Grid.Item key={item}>{item}</Grid.Item>;
        })}
      </Grid>
      
    </>
  );
};

export default NavBar;
