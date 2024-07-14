import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        minify: 'terser',
    },
    // server config
    server: {
        port: 5173,
        open: true, // auto open
        hmr: true,
        cors: true,
    },
});
