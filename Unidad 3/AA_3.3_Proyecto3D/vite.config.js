
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve'
    ? '/'
    : '/graficacion-portafolio/Unidad%203/AA_3.3_Proyecto3D/demo/',

  build: {
    outDir: 'demo',
    emptyOutDir: true
  }
}));
