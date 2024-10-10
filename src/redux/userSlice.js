// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // 命名空间
  name: "user",
  // 初始状态
  initialState: {
    username: "",
    avatarUrl: "",
    email: "",
    id: null,
    index: null,
    sex: null,
  },
  // reducers
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.avatarUrl = action.payload.avatarUrl;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.index = action.payload.index;
      state.sex = action.payload.sex;
    },
    clearUser(state) {
      state.username = "";
      state.avatarUrl = "";
      state.email = "";
      state.id = null;
      state.index = null;
      state.sex = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
