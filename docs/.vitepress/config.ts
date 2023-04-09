import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Tel Input",
  description: "International Phone Input for Vue",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Documentation', link: '/guide/getting-started' },
      { text: 'Sponsor', link: 'https://github.com/sponsors/iamstevendao' },
      { text: 'Changelog', link: 'https://github.com/iamstevendao/vue-tel-input/releases' },
      { text: 'GitHub', link: 'https://github.com/iamstevendao/vue-tel-input' }
    ],

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
