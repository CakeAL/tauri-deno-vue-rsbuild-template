import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  performance: {
    chunkSplit: {
      strategy: "split-by-experience",
    },
  },
  dev: {
    watchFiles: {
      paths: "!src-tauri/**",
    },
    client: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || undefined,
  },
});
