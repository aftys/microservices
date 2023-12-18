import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import process from "process";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(process.cwd(), "./src/components"),
      "@interfaces": path.resolve(process.cwd(), "./src/interfaces"),
      "@enums": path.resolve(process.cwd(), "./src/enums"),
      "@pages": path.resolve(process.cwd(), "./src/pages"),
      "@utils": path.resolve(process.cwd(), "./src/utils"),
      "@hooks": path.resolve(process.cwd(), "./src/hooks"),
      "@contexts": path.resolve(process.cwd(), "./src/contexts"),
      "@navigation": path.resolve(process.cwd(), "./src/navigation"),
      "@hocs": path.resolve(process.cwd(), "./src/hocs"),
      "@configs": path.resolve(process.cwd(), "./src/configs"),
      "@assets": path.resolve(process.cwd(), "./src/assets"),
      "@apis": path.resolve(process.cwd(), "./src/apis"),
    },
  },
});
