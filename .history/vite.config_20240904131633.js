import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(
        fileURLToPath(new URL("./src/components", import.meta.url))
      ),
      "@pages": path.resolve(
        fileURLToPath(new URL("./src/pages", import.meta.url))
      ),
      "@assets": path.resolve(
        fileURLToPath(new URL("./src/assets", import.meta.url))
      ),
      "@views": path.resolve(
        fileURLToPath(new URL("./src/views", import.meta.url))
      ),
      "@": path.resolve(fileURLToPath(new URL("./src", import.meta.url))),
      // 可以根据需要添加更多别名
    },
  },
  base: "./",
  build: {
    // minify: false, // 关闭 Vite 默认的压缩，以便 obfuscator 插件生效
  },
});
