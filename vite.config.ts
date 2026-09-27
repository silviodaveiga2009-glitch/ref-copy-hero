// Keep the wrapper's app/development plugins. Nitro is disabled below in favor of
// TanStack Start's official Cloudflare Vite plugin; src/server.ts remains the Worker entry.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  nitro: false,
  vite: {
    plugins: [cloudflare({ viteEnvironment: { name: "ssr" } })],
  },
  tanstackStart: {
    // Keep the custom SSR error wrapper as TanStack Start's server entry.
    server: { entry: "server" },
  },
});
