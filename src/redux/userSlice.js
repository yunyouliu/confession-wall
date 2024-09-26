// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 从 localStorage 中读取初始状态
const loadUserFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const { username, roleId, rights, roleState } = JSON.parse(token);
    return { username, roleId, rights, roleState };
  }
  return {
    username: "",
    roleId: null,
    rights: [],
    roleState: false,
  };
};

const initialState = loadUserFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
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
