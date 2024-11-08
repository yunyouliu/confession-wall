/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-26 20:47:07
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-08 16:37:08
 */
import axios from "axios";
// 更新点赞状态
export const updateLikeStatus = async (id, liked, type) => {
  try {
    const status = type === "post" ? 0 : 1;
    const response = await axios.post("/wall/support/saveOrCancel", {
      id,
      liked,
      type: status,
    });
    return response.data;
  } catch (error) {
    console.error("更新点赞状态失败：", error);
    throw error;
  }
};

// 初始化点赞状态
export const initializeLikeStatus = async () => {
  try {
    const response = await axios.get("/wall/support/search");
    return response.data;
  } catch (error) {
    console.error("初始化点赞状态失败：", error);
    throw error;
  }
};

// 初始化权限
export const initializeAuths = async () => {
  try {
    const response = await axios.get("/wall/auth/validate-token", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// 更新用户信息
export const updateUserInfo = async (id) => {
  try {
    const response = await axios.get(`/wall/user/info/${id}`);
    return response.data;
  } catch (error) {
    console.error("更新用户信息失败：", error);
    throw error;
  }
};
