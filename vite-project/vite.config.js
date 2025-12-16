import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// This fixes the "__dirname" issue in modern JavaScript projects
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 1. The Main Page (Required)
        main: resolve(__dirname, "index.html"),

        // 2. Extra Pages
        // ONLY uncomment these lines if the files actually exist in your folder!
        // If 1.html doesn't exist yet, add "//" in front of that line.
        page1: resolve(__dirname, "index.html"),
        page2: resolve(__dirname, "2.html"),
        page3: resolve(__dirname, "3.html"),
      },
    },
  },
});
