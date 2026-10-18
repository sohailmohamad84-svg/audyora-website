import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        services: resolve(__dirname, "services/index.html"),
        mediaKit: resolve(__dirname, "media-kit/index.html"),
        industries: resolve(__dirname, "industries/index.html"),
        methodology: resolve(__dirname, "methodology/index.html"),
        work: resolve(__dirname, "work/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        terms: resolve(__dirname, "terms/index.html"),
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
