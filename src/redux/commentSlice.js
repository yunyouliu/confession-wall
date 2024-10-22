import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    like: [], // 点赞
    CancelLike: [], // 取消点赞
    top: 0, // 置顶
    onlyComments: 0, // 仅自己可评论
    section: 0, // 板块
    flag: false,
    select: false,
  },
  reducers: {
    // like push
    like(state, action) {
      state.like.push(action.payload);
    },

    // like cancel
    CancelLike(state, action) {
      state.CancelLike.push(action.payload);
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
});

export const {
  like,
  CancelLike,
  setTop,
  setOnlyComments,
  setSection,
  setFlag,
  setSelect,
} = commentSlice.actions;

export default commentSlice.reducer;
