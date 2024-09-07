import React from "react";
import { Grid } from "antd-mobile";
const NavBar = () => {
  return (
    <>
      <Grid columns={3} gap={8}>
        <Grid.Item>
          <div className="">A</div>
        </Grid.Item>
        <Grid.Item>
          <div className="">B</div>
        </Grid.Item>
        <Grid.Item>
          <div className="">C</div>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default NavBar;
