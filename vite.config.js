import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: 'src', //not needed if index.html is in the root of the project. since ours is in src we need
})

//vite icon not showing in folder exp0lorer, its giving not done right lol
