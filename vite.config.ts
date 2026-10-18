import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        services: resolve(__dirname, "services/index.html"),
        work: resolve(__dirname, "work/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: false,
  },
});
