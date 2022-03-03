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
          '/frontend/fr1.md',
          '/frontend/fr2.md',
          '/frontend/fr3.md',
          '/frontend/fr4.md',
          '/frontend/fr5.md',
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