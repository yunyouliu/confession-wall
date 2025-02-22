import { VitePWA } from "vite-plugin-pwa";

export default VitePWA({
  registerType: "autoUpdate",
  injectRegister: "auto",
  workbox: {
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      // 缓存来自阿里云OSS的图片资源
      {
        urlPattern:
          /^https:\/\/gulimall-liheng\.oss-cn-shenzhen\.aliyuncs\.com\/.*\.(png|jpg|jpeg|svg|gif)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "oss-image-cache",
          expiration: {
            maxEntries: 500, // 最多缓存500张图片
            maxAgeSeconds: 30 * 24 * 60 * 60, // 图片缓存一个月
          },
        },
      },
      // 缓存CSS资源
      {
        urlPattern: /\.(?:css)$/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "css-cache",
          expiration: {
            maxEntries: 50, // 最多缓存50个CSS文件
            maxAgeSeconds: 7 * 24 * 60 * 60, // CSS文件缓存一周
          },
        },
      },
      // 缓存JS资源
      {
        urlPattern: /\.(?:js)$/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "js-cache",
          expiration: {
            maxEntries: 30, // 最多缓存30个JS文件
            maxAgeSeconds: 7 * 24 * 60 * 60, // JS文件缓存一周
          },
        },
      },
      {
        urlPattern: new RegExp(`^https://www.flawless.uno:5173/wall.*`),
        handler: "NetworkFirst", // 或者根据需求选择其他策略
        options: {
          cacheName: "api-cache",
          networkTimeoutSeconds: 5, // 如果网络请求超时，则使用缓存
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 5 * 60, // 缓存5分钟
          },
          backgroundSync: {
            name: "api-sync",
            options: {
              maxRetentionTime: 60 * 60, // 同步任务保留时间1小时
            },
          },
        },
      },
    ],
  },
  includeAssets: ["favicon.svg", "apple-touch-icon.png", "masked-icon.svg"], // 包含静态资源
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
});
