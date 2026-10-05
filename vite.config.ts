import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Served from the root of a custom domain on GitHub Pages, so no subpath is needed.
  base: "/",
  server: {
    host: "::",
    port: 8080,
    // Allow sharing the dev server through ngrok tunnels
    allowedHosts: [".ngrok-free.app"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
