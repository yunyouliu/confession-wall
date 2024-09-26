import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 默认使用 localStorage
import collapseReducer from "./collapseSlice";
import userReducer from "./userSlice";
import isloadingReducer from "./loadingSlice";

// 配置 collapseReducer 的持久化
const collapsePersistConfig = {
  key: "collapse", // 储存的 key
  storage, // 使用 localStorage 作为存储引擎
};

// 持久化 reducer
const persistedCollapseReducer = persistReducer(
  collapsePersistConfig,
  collapseReducer
);

// 创建 Redux store
const store = configureStore({
  reducer: {
    collapse: persistedCollapseReducer, // 使用持久化的 collapseReducer
    user: userReducer, // 用户信息
    isloading: isloadingReducer, // 全局加载状态
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

// 创建 redux-persist 的持久化存储实例
const persistor = persistStore(store);

// 导出 store 和 persistor
export { store, persistor };
