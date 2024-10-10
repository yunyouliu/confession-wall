import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./view/index/index";
import "./index.css";
import "./assets/iconfont";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import "./utils/http";
import { Provider } from "react-redux";
import { store } from "././redux/store";
import ToastContainer from "./components/ToastContainer";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <ToastContainer />
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
