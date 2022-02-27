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
        title: 'HTML',
        collapsable: false,
        children: [
          '/html/html01',
          '/html/html02',
        ]
      }
    ]
  }
}