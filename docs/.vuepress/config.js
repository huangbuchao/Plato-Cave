const { resolve } = require("path");

module.exports = {
  title: "Plato-Cave",
  description: "insight into the source.",
  base: "/Plato-Cave/",
  locales: {
    "/": {
      lang: "en-US",
      title: "plato-cave",
      description: "insight into the source."
    },
    "/zh/": {
      lang: "zh-CN",
      title: "柏拉图洞穴",
      description: "洞悉源"
    }
  },
  themeConfig: {
    repo: 'huangbuchao/Plato-Cave',
    editLinks: true,
    smoothScroll: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: 'Last Updated',
        nav: require("./nav/en"),
        sidebar: require('./sidebar/en')
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        ariaLabel: '选择语言',
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh')
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@imgs": resolve(__dirname, "./images")
      }
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
    '.vuepress/sidebar/en.js',
    '.vuepress/sidebar/zh.js',
  ]
};
