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
      {
        text: 'Web3基础',
        items: [
          {
            text: 'Foundry开发环境搭建与基本使用',
            link: '/docs/web3/2024-8-7',
          },
          {
            text: '以太币单位',
            link: '/docs/web3/2024-8-12',
          },
          {
            text: 'Solidity开发之函数',
            link: '/docs/web3/2024-8-15',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/litie2023' }],
  },
})
