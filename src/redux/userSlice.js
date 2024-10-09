// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // 命名空间
  name: "user",
  // 初始状态
  initialState: {
    username: "",
    roleId: null,
    rights: [],
    roleState: false,
  },
  // reducers
  reducers: {
    setUser(state, action) {
      const { username, roleId, rights, roleState } = action.payload;
      state.username = username;
      state.roleId = roleId;
      state.rights = rights;
      state.roleState = roleState;
    },
    clearUser(state) {
      state.username = "";
      state.roleId = null;
      state.rights = [];
      state.roleState = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
