import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import envCompatible from "vite-plugin-env-compatible"
import dotenv from "dotenv"

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react(), envCompatible()],
  define: {
    "process.env.REACT_APP_": JSON.stringify(process.env.REACT_APP_),
  },
})
