import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
// 懒加载组件
const Login = lazy(() => import("../view/login/login"));
const Index = lazy(() => import("../view/index/index"));
const Detail = lazy(() => import("../view/detail/detail"));
const Register = lazy(() => import("../view/register/register"));
const routes = [
  {
    path: "/login",
    name: "登录",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-lg font-semibold text-gray-600">
              Loading...
            </div>
          </div>
        }
      >
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    name: "注册",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-lg font-semibold text-gray-600">
              Loading...
            </div>
          </div>
        }
      >
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/index",
    name: "首页",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-lg font-semibold text-gray-600">
              Loading...
            </div>
          </div>
        }
      >
        <Index />
      </Suspense>
    ),
  },
  {
    path: "/detail",
    name: "详情",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Navigate to={"/index"} />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <>err</>
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
