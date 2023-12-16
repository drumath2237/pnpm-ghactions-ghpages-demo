import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/pnpm-ghactions-ghpages-demo/",
      plugins: [vue()],
    };
  }
  return {
    plugins: [vue()],
  };
});
