import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 创建异步 thunk
export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // 验证 token
        const response = await fetch("/api/auth/validate-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.data; // 返回用户信息
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return null; // 如果没有 token，返回 null
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    // 其他同步 reducers 可以在这里添加
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoggedIn = true;
          state.user = action.payload;
        } else {
          state.isLoggedIn = false;
          state.user = null;
        }
        state.error = null; // 清除错误
      })
      .addCase(initializeAuth.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = action.payload; // 设置错误信息
      });
  },
});

// 导出 reducer
export default authSlice.reducer;
