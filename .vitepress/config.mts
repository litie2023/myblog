import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lenis's Blog",
  description: 'A personal blog',
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
        text: 'Vue',
        items: [
          {
            text: '在Vue中组件间通讯的几种方式',
            link: '/docs/frontend/2024-8-2',
          },
        ],
      },
      {
        text: 'React',
        items: [],
      },
      {
        text: 'Web3基础',
        items: [
          {
            text: 'Foundry开发环境搭建与基本使用',
            link: '/docs/web3/2024-8-7',
          },
          {
            text: '以太币单位Wei及换算关系',
            link: '/docs/web3/2024-8-12',
          },
          {
            text: 'Solidity开发之函数',
            link: '/docs/web3/2024-8-15',
          },
          {
            text: '用vscode本地开发Solidity并连到Remix',
            link: '/docs/web3/2024-8-19',
          },
          {
            text: '基于Foundry工具链搭建一套前后端的开发与测试环境',
            link: '/docs/web3/2024-8-21',
          },
          {
            text: '连接小狐狸钱包MetaMask',
            link: '/docs/web3/2024-8-27',
          },
        ],
      },
      {
        text: 'NodeJS基础',
        items: [],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/litie2023' }],
  },
})
