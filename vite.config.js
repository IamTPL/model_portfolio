import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import imagePresets from 'vite-plugin-image-presets';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        imagePresets({
            include: ['**/*.png', '**/*.JPG'],
        }),
    ],
    assetsInclude: ['**/*.PNG', '**/*.JPG'],
});
