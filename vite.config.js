import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevents unexpected chunk splitting
      },
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker"],
  },
});
