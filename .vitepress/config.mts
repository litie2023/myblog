import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Tiezi's Blog",
  description: 'A VitePress Site',
  themeConfig: {
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
      },
    },
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: '前端框架认知',
        items: [
          {
            text: '在Vue中组件间通讯的几种方式',
            link: '/docs/frontend/2024-8-2',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/litie2023' }],
  },
})
