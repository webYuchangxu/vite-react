import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':'src',
      '@jsx':'src/pages/jsx',
      '@tsx':'src/pages/tsx'
    },
    extensions:['.tsx','.jsx','.ts','.js']
  }
})
