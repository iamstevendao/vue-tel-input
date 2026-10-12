import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Tel Input",
  base: '/vue-tel-input/',
  description: "International Phone Input for Vue",
  sitemap: { hostname: 'https://iamstevendao.com/vue-tel-input/' },
  head: [
    ['meta', { name: 'author', content: 'Steven Dao' }],
    ['link', { rel: 'author', href: 'https://iamstevendao.com/' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: 'vue-tel-input',
      description: 'International telephone input for Vue',
      url: 'https://iamstevendao.com/vue-tel-input/',
      codeRepository: 'https://github.com/iamstevendao/vue-tel-input',
      author: {
        '@type': 'Person',
        '@id': 'https://iamstevendao.com/#person',
        name: 'Steven Dao',
        url: 'https://iamstevendao.com/',
      },
    })],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Documentation', link: '/guide/getting-started' },
      { text: 'Sponsor', link: 'https://github.com/sponsors/iamstevendao' },
      { text: 'Changelog', link: 'https://github.com/iamstevendao/vue-tel-input/releases' },
      { text: 'GitHub', link: 'https://github.com/iamstevendao/vue-tel-input' }
    ],

    footer: {
      message: 'Made by <a href="https://iamstevendao.com/">Steven Dao</a>, founder of <a href="https://speakeroo.app/?utm_source=vue-tel-input&utm_medium=referral">Speakeroo</a>.',
    },

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: 'guide/getting-started' },
          { text: 'Installation', link: 'guide/installation' },
          { text: 'Vue 2 Support', link: 'guide/legacy' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Props', link: 'usage/props' },
          { text: 'Events', link: 'usage/events' },
          { text: 'Slots', link: 'usage/slots' },
          { text: 'custom-form-of-vue-form-generator', link: 'usage/custom-form-of-vue-form-generator' }
        ]
      },
      {
        text: 'Others',
        items: [
          { text: 'Typescript Support', link: 'others/typescript-support' },
          { text: 'v3', link: 'others/v3' },
          { text: 'v2', link: 'others/v2' },
          { text: 'Credits', link: 'others/credits' },
        ]
      }
    ],
  }
})
