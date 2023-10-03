import { defineConfig } from "vite";
import path from "node:path";

const isGitHubPages = false;
const folderName = `${path.basename(process.cwd())}/`;
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? `/${folderName}` : "/";

console.log(`Valor de ME_GUSTAN_LOS_AGUACATES ->${process.env.ME_GUSTAN_LOS_AGUACATES}`);

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
});
