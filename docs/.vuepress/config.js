module.exports = {
  base: '/blog/',
  title: `Fanison's Blog`,
  description: 'Keep Learning, Keep Growing, Keep Succeeding',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
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
          '/frontend/fr001.md',
          '/frontend/fr002.md',
          '/frontend/fr003.md',
          '/frontend/fr004.md',
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

    ]
  }
}