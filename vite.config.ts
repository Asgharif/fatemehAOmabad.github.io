import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/organization GitHub Pages site (fatemehAOmabad.github.io) is served
// from the domain root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
