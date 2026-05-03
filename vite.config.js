import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Pastikan ini ada

// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["@heroui/react", "@heroui/system", "@heroui/theme"],
  },
});

// export default defineConfig({
//   plugins: [
//     react(),
//     // tailwindcss(), // Tambahkan ini
//   ],
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [
//     tailwindcss(), // Plugin ini yang akan mencari file CSS dengan @import "tailwindcss"
//   ],
// });
