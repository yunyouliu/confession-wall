/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-22 13:27:46
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-12 18:17:07
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateLikeStatus } from "@/api/api";

// 异步 Thunk：点赞状态同步到数据库
export const toggleLikeAsync = createAsyncThunk(
  "comment/toggleLikeAsync",
  async ({ id, type }, { getState, rejectWithValue }) => {
    const state = getState();
    let isLiked;
    if (type === "comment") {
      isLiked = state.comment.likedComments.includes(id);
    } else {
      isLiked = state.comment.likedPosts.includes(id);
    }
    try {
      // 调用 API 更新点赞状态
      await updateLikeStatus(id, !isLiked, type);
      return { id, type }; // 返回 ID 和类型
    } catch (error) {
      console.error("Error in toggleLikeAsync", error);
      return rejectWithValue(error.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    likedComments: [],
    likedPosts: [],
    top: 0,
    onlyComments: 0,
    section: 0,
    flag: false,
    select: false,
  },
  reducers: {
    setLikedItems(state, action) {
      state.likedComments = action.payload.likedComments || [];
      state.likedPosts = action.payload.likedPosts|| [];
    },
    setTop(state, action) {
      state.top = action.payload;
    },
    setOnlyComments(state, action) {
      state.onlyComments = action.payload;
    },
    setSection(state, action) {
      state.section = action.payload;
    },
    setFlag(state, action) {
      state.flag = action.payload;
    },
    setSelect(state, action) {
      state.select = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleLikeAsync.pending, (state) => {
        console.log("requesting");
      })
      .addCase(toggleLikeAsync.fulfilled, (state, action) => {
        const { id, type } = action.payload;
        if (type === "comment") {
          const index = state.likedComments.indexOf(id);
          if (index === -1) {
            state.likedComments.push(id); //添加到已点赞的评论中
          } else {
            state.likedComments.splice(index, 1); //从已点赞的评论中移除
          }
        } else {
          const index = state.likedPosts.indexOf(id);
          if (index === -1) {
            state.likedPosts.push(id); //添加到已点赞的文章中
          } else {
            state.likedPosts.splice(index, 1); //从已点赞的文章中移除
          }
        }
        state.isRequesting = false; // 请求完成后重置状态
      })
      .addCase(toggleLikeAsync.rejected, (state, action) => {
        console.error("Eroor in toggleLikeAsync", action.payload);
      });
  },
});

export const {
  setLikedItems,
  setTop,
  setOnlyComments,
  setSection,
  setFlag,
  setSelect,
} = commentSlice.actions;

export default commentSlice.reducer;
