import { defineConfig } from 'vite';

export default defineConfig({
  // This is the folder where your HTML file resides
  root: 'src',  // Specify 'src' as your root directory
  build: {
    outDir: '../build', // Output directory for production build
    emptyOutDir: true,  // Clean output directory before build
  },
  server: {
    open: true, // Automatically open the browser when the server starts
    port: 3000, // Set a specific port
  },
});
