/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 00:27:50
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 16:32:38
 */
/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 00:27:50
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 16:25:48
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
import pwaConfig from "./pwaConfig";

export default defineConfig({
  plugins: [react(), pwaConfig],
  // 配置host 0.0.0.0
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@/components": path.resolve(
        fileURLToPath(new URL("./src/components", import.meta.url))
      ),
      "@": path.resolve(fileURLToPath(new URL("./src", import.meta.url))),
    },
  },
  base: "./",
  // build: {
  //   minify: false, // 关闭 Vite 默认的压缩，以便 obfuscator 插件生效
  // },
});
