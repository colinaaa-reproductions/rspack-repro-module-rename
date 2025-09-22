import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    target: 'node',
    minify: false,
    distPath: {
      root: "./rsbuild-dist",
    },
  },
});
