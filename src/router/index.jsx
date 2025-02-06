/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-06 12:21:11
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-16 21:18:53
 */
import React, { Suspense, lazy } from "react";
import { createBrowserRouter,createHashRouter, Navigate } from "react-router-dom";
// import { KeepAlive, AliveScope } from "react-activation";
import WithAuth from "./withAuth";
// 懒加载组件
const Login = lazy(() => import("../view/login/login"));
const Index = lazy(() => import("../view/index/index"));
const Detail = lazy(() => import("../view/detail/detail"));
const Register = lazy(() => import("../view/register/register"));
const EassyPost = lazy(() => import("../view/eassyPost/esaayPost"));

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
      // <KeepAlive>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="text-lg font-semibold text-gray-600">
                Loading...
              </div>
            </div>
          }
        >
          <WithAuth>
            <Index />
          </WithAuth>
        </Suspense>
      // </KeepAlive>
    ),
  },
  {
    path: "/detail",
    name: "详情",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <WithAuth>
          <Detail />
        </WithAuth>
      </Suspense>
    ),
  },
  {
    path: "/eassypost",
    name: "发帖",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <WithAuth>
          <EassyPost />
        </WithAuth>
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Navigate to={"/login"} />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <>err</>
      </Suspense>
    ),
  },
];

const router = createHashRouter(routes);

export default router;
