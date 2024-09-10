import { StrictMode } from "react";
import { createRoot, ScrollRestoration } from "react-dom/client";
import App from "./view/index/index";
import "./index.css";
import "./assets/iconfont";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} >
      <ScrollRestoration />
      </RouterProvider>
  </StrictMode>
);
