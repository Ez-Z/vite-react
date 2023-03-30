// vite.config.ts
import { defineConfig } from "file:///Users/zhoushengda/Desktop/dev/vite-react/node_modules/.pnpm/vite@4.2.1_y7rghahg7ddu72pko63vhsxa44/node_modules/vite/dist/node/index.js";
import react from "file:///Users/zhoushengda/Desktop/dev/vite-react/node_modules/.pnpm/@vitejs+plugin-react-swc@3.2.0_vite@4.2.1/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/zhoushengda/Desktop/dev/vite-react";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    react()
    // visualizer({
    //   open: true,
    // }),
  ],
  css: {
    // postcss: {
    //   plugins: [
    //     pxtovw({
    //       viewportWidth: 375,
    //       viewportUnit: "vw",
    //     }),
    //   ],
    // },
  },
  server: {
    port: 9977,
    open: "http://127.0.0.1:9977/"
    // proxy: {
    //   "/api": {
    //     target: "http://10.0.40.200:8979",
    //     ws: false,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhvdXNoZW5nZGEvRGVza3RvcC9kZXYvdml0ZS1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3pob3VzaGVuZ2RhL0Rlc2t0b3AvZGV2L3ZpdGUtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3pob3VzaGVuZ2RhL0Rlc2t0b3AvZGV2L3ZpdGUtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbi8vIGltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgcHh0b3Z3IGZyb20gXCJwb3N0Y3NzLXB4LXRvLXZpZXdwb3J0XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gdmlzdWFsaXplcih7XG4gICAgLy8gICBvcGVuOiB0cnVlLFxuICAgIC8vIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICAvLyBwb3N0Y3NzOiB7XG4gICAgLy8gICBwbHVnaW5zOiBbXG4gICAgLy8gICAgIHB4dG92dyh7XG4gICAgLy8gICAgICAgdmlld3BvcnRXaWR0aDogMzc1LFxuICAgIC8vICAgICAgIHZpZXdwb3J0VW5pdDogXCJ2d1wiLFxuICAgIC8vICAgICB9KSxcbiAgICAvLyAgIF0sXG4gICAgLy8gfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogOTk3NyxcbiAgICBvcGVuOiBcImh0dHA6Ly8xMjcuMC4wLjE6OTk3Ny9cIixcbiAgICAvLyBwcm94eToge1xuICAgIC8vICAgXCIvYXBpXCI6IHtcbiAgICAvLyAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMC4wLjQwLjIwMDo4OTc5XCIsXG4gICAgLy8gICAgIHdzOiBmYWxzZSxcbiAgICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsU0FBUyxvQkFBb0I7QUFDMVUsT0FBTyxXQUFXO0FBR2xCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJUjtBQUFBLEVBQ0EsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNMO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
