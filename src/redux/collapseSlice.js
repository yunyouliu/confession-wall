import { createSlice } from "@reduxjs/toolkit";


// 创建一个名为 "collapse" 的 slice，用于管理应用的折叠状态
const collapseSlice = createSlice({
  name: "collapse", // 定义 slice 的名称为 "collapse"
  initialState: {
    collapse: false, // 初始时，折叠状态为 false，表示未折叠
  },
  reducers: {
    // 定义 slice 中的 reducer 函数
    changeCollapse(state) {
      state.collapse = !state.collapse; // 将当前的折叠状态取反
    },
  },
});


// 导出 actions 和 reducer
export const { changeCollapse } = collapseSlice.actions;
export default collapseSlice.reducer;
