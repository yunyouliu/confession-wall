/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-14 12:11:21
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-12 18:31:06
 */
// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // 命名空间
  name: "user",
  // 初始状态
  initialState: {
    username: "",
    avatarUrl: "",
    id: null,
    sex: null,
  },
  // reducers
  reducers: {
    setUser(state, action) {
      state.username = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.id = action.payload.id;
      state.sex = action.payload.sex;
    },
    clearUser(state) {
      state.username = "";
      state.avatarUrl = "";
      state.id = null;
      state.sex = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
