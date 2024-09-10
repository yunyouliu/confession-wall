import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/iconfont";
import {  RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
