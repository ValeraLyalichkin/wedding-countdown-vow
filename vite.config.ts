import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    pages: [{ path: "/" }, { path: "/thanks" }],
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
