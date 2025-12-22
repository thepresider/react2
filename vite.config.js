import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react2/', // MUST have slashes on both sides
  plugins: [react()],
})
