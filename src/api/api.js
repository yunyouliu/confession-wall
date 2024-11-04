/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-26 20:47:07
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-01 12:54:09
 */
import axios from "axios";
// 更新点赞状态
export const updateLikeStatus = async (id, liked, type) => {
  try {
    const response = await axios.post("/api/like", { id, liked, type });
    return response.data;
  } catch (error) {
    console.error("更新点赞状态失败：", error);
    throw error;
  }
};


// 初始化点赞状态
export const initializeLikeStatus = async (id, type) => {
  try {
    const response = await axios.get("/api/like", { params: { id, type } });
    return response.data;
  } catch (error) {
    console.error("初始化点赞状态失败：", error);
    throw error;
  }
};