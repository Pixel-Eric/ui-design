import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "node:path";

/**
 * 组件库打包的Vite配置文件
 */
export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: resolve("./index.ts"),
      name: "CDesign",
      formats: ["es", "umd"],
      fileName: "CDesign",
    },
    outDir: "./dist",
  },
});
