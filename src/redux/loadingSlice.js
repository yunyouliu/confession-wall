import { createSlice } from "@reduxjs/toolkit";

// 创建一个名为 "isloading" 的 slice，用于管理应用的 loading 状态
const isloadingSlice = createSlice({
  name: "isloading",
  initialState: {
    isloading: false, // 初始时，loading 状态为 false，表示没有加载中
  },
  reducers: {
    // 定义 slice 中的 reducer 函数
    changeloading(state, action) {
      // 用于切换 loading 状态的 reducer
      state.isloading = action.payload; // 将当前的 loading 状态取反
    },
  },
});

// 导出 changeLoading 动作创建函数，以便在应用中使用  按需导出
export const { changeloading } = isloadingSlice.actions;

// 默认导出 slice 的 reducer 函数
export default isloadingSlice.reducer;
