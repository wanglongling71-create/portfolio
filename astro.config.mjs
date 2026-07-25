import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: 部署前替换为你的实际 GitHub 用户名和仓库名
  // 如果仓库名为 "portfolio":     base: '/portfolio/'
  // 如果仓库名为 "<user>.github.io": base: '/'
  site: 'https://localhost:4321',
  base: '/',
});
