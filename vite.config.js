/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 00:27:50
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-17 17:28:51
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // workbox: {
      //   runtimeCaching: [{ urlPattern: /\/api/, handler: "NetworkFirst" }],
      // },
      manifest: {
        name: "校园墙",
        short_name: "校园墙",
        description: "校园墙 PWA 应用",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/mihayou-192x192.png", // 使用 / 开头的路径
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/mihayou-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
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
