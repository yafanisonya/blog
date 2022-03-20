module.exports = {
  base: '/blog/',
  title: `Fanison's Blog`,
  description: 'Keep Learning, Keep Growing, Keep Succeeding',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      {
        text: '项目总结',
        items: [
          { text: 'Vue3 Wheel', link: '/project/' },
          { text: 'Vue Money', link: 'https://yafanisonya.github.io/note/money/note.html' }
        ]
      },
      { text: '学习笔记', link: 'https://yafanisonya.github.io/note/' },
      { text: 'Github', link: 'https://github.com/yafanisonya' },
    ],
    sidebar: [
      {
        title: 'Home',
        collapsable: false,
        children: [
          '/',
          '/cv/',
        ]
      },
      {
        title: '前端',
        collapsable: false,
        children: [
          '/frontend/',
          '/frontend/fr002.md',
          '/frontend/fr003.md',
          '/frontend/fr004.md',
          '/frontend/typescript.md',
          '/frontend/webpack.md',
          '/frontend/browser.md',
          '/frontend/network.md',
          '/frontend/safety.md',
          '/frontend/vue.md',
          '/frontend/react.md',
        ]
      },
      {
        title: '深入浅出',
        collapsable: false,
        children: [
          '/new/new1',
          '/new/new2',
          '/new/new3',
          '/new/new4',
          '/new/new5'
        ]
      },
      {
        title: '项目总结',
        collapsable: false,
        children: [
          '/project/',
          '/project/morney.md',
        ]
      },
    ]
  }
}