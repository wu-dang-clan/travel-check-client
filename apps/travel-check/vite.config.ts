// apps/web/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui"),
    },
  },
  server: {
    fs: {
      allow: [".."], // monorepo 상위 경로 접근 허용
    },
  },
  plugins: [react(), TanStackRouterVite()],
});
