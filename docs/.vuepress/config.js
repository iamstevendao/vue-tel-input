module.exports = {
  base: '/vue-tel-input/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Tel Input',
      description: 'Documentation site for Vue Tel Input'
    }
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png" }],
  ],
  themeConfig: {
    repo: '',
    docsDir: 'docs',
    search: false,
    displayAllHeaders: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Documentation', link: '/documentation/' },
          { text: 'Sponsor', link: 'https://github.com/sponsors/iamstevendao' },
          { text: 'Changelog', link: 'https://github.com/EducationLink/vue-tel-input/releases' },
          { text: 'GitHub', link: 'https://github.com/EducationLink/vue-tel-input' }
        ],
        sidebar: {
          '/documentation/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                'getting-started',
                'installation'
              ]
            },
            {
              title: 'Usage',
              collapsable: false,
              children: [
                'props',
                'events',
                'slots',
                'custom-form-of-vue-form-generator'
              ]
            },
            {
              title: 'Others',
              collapsable: false,
              children: [
                'typescript-support',
                'v3',
                'v2',
                'credits',
              ]
            }
          ]
        }
      }
    }
  }
}
