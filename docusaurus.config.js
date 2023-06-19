// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bear React Carousel',
  tagline: 'Most modern mobile touch slider with hardware accelerated transitions for ReactJS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bear-react-carousel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bear-react-carousel', // Usually your GitHub org/user name.
  projectName: 'bear-react-carousel.github.io', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        apiKey: 'd012934f4a6a049a495bd0b1db01333c',
        indexName: 'bear-react-carousel',
        appId: '7V7AV8Y672',
      },
      // Replace with your project's social card
      image: 'img/bear-react-carousel-card.webp',
      navbar: {
        title: 'Bear React Carousel',
        logo: {
          alt: 'Bear React Carousel Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {to: '/docs/getting-started', label: 'Started', position: 'right'},
          {to: '/docs/faq/migration-to-4', label: 'Migration', position: 'right'},
          {to: '/docs/props-try', label: 'Props Try', position: 'right'},
          {to: '/docs/category/feature', label: 'Feature', position: 'right'},
          {to: '/docs/category/examples', label: 'Examples', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/imagine10255/bear-react-carousel',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} My Project, Inc. Built with Imagine10255.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        injectManifestConfig: {
          manifestTransforms: [
            //...
          ],
          modifyURLPrefix: {
            //...
          },
          // We already add regular static assets (HTML, images...) to be available offline
          // You can add more files according to your needs
          globPatterns: ['**/*.{pdf,docx,xlsx}'],
          // ...
        },
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#09d3ac',
          },
        ],
      },
    ]
  ]
};

module.exports = config;
