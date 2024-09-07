import React from "react";
import { Grid } from "antd-mobile";
const NavBar = () => {
  return (
    <>
      <Grid columns={3} gap={8}>
        <Grid.Item>
          <div className={styles["grid-demo-item-block"]}>A</div>
        </Grid.Item>
        <Grid.Item>
          <div className={styles["grid-demo-item-block"]}>B</div>
        </Grid.Item>
        <Grid.Item>
          <div className={styles["grid-demo-item-block"]}>C</div>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default NavBar;
