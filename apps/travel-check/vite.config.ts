// apps/web/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui"),
      "@components": path.resolve(__dirname, "./src/shared/components"),

      //page별 components
      "@CreatePage": path.resolve(__dirname, "./src/components/CreatePage"),
      "@DeletePage": path.resolve(__dirname, "./src/components/DeletePage"),
      "@JoinPage": path.resolve(__dirname, "./src/components/JoinPage"),
      "@LinkPage": path.resolve(__dirname, "./src/components/LinkPage"),
      "@LoadingPage": path.resolve(__dirname, "./src/components/LoadingPage"),
      "@MainPage": path.resolve(__dirname, "./src/components/MainPage"),
      "@MemberPage": path.resolve(__dirname, "./src/components/MemberPage"),
      "@Modals": path.resolve(__dirname, "./src/components/Modals"),
    },
  },
  server: {
    fs: {
      allow: [".."], // monorepo 상위 경로 접근 허용
    },
  },
  plugins: [react(), TanStackRouterVite()],
});
