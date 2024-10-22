import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab", // 定义切片名称
  initialState: {
    section: "0", // 板块
    tab: "5", // 标签
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { setTab, setSection,setFlag,setSelect } = tabSlice.actions;
export default tabSlice.reducer;
