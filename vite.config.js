import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const isGlitchEnvironment = !!process.env.GLITCH_SHARED_INCLUDES_LEGACY_CLS

const glitch = {
  host: '0.0.0.0',
  port: 3000,
  strictPort: true,
  hmr: {
    clientPort: 443, // Run the websocket server on the SSL port
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'build',
  },
  server: isGlitchEnvironment ? glitch : {},
})
