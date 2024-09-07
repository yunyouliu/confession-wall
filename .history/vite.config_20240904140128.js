import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import path from "path";
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
        plugins: [
            tailwindcss,
            autoprefixer,
        ]
    }
},
  resolve: {
    alias: {
      "@/components": path.resolve(
        fileURLToPath(new URL("./src/components", import.meta.url))
      ),
      "@/": path.resolve(
        fileURLToPath(new URL("./src", import.meta.url))
      ),
    },
  },
  base: "./",
  build: {
    // minify: false, // 关闭 Vite 默认的压缩，以便 obfuscator 插件生效
  },
});
