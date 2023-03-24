import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pxtovw from "postcss-px-to-viewport";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        pxtovw({
          viewportWidth: 375,
          viewportUnit: "vw",
        }),
      ],
    },
  },
  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://10.0.40.200:8979",
    //     ws: false,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
});
