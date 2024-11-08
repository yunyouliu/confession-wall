/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-14 12:11:21
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-08 17:12:00
 */
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 默认使用 localStorage
import userReducer from "./userSlice";
import tabReducer from "./tabSlice";
import commentReducer from "./commentSlice";
import authReducer, { initializeAuth } from "./authSlice";

// 配置 userReducer 的持久化
const userPersistConfig = {
  key: "user", // 储存的 key
  storage, // 使用 localStorage 作为存储引擎
};

// 持久化 reducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// 配置tabReducer的持久化
const tabPersistConfig = {
  key: "tab", // 储存的 key
  storage, // 使用 localStorage 作为存储引擎
};
//   持久化 reducer
const persistedTabReducer = persistReducer(tabPersistConfig, tabReducer);

// 配置 commentReducer 的持久化
const commentPersistConfig = {
  key: "comment",
  storage,
};

// 持久化 reducer
const persistedCommentReducer = persistReducer(
  commentPersistConfig,
  commentReducer
);

// 持久化aureducer
const authPersistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// 创建 Redux store
const store = configureStore({
  reducer: {
    user: persistedUserReducer, // 用户信息持久化
    tab: persistedTabReducer, // 板块持久化
    comment: persistedCommentReducer,
    auth:  persistedAuthReducer,
  },
  // 配置 redux-persist 的中间件
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 忽略 redux-persist 的一些特殊字段
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["register"],
      },
    }),
});

//  初始化 auth 状态
store.dispatch(initializeAuth());

// 创建 redux-persist 的持久化存储实例
const persistor = persistStore(store);

// 导出 store 和 persistor
export { store, persistor };
