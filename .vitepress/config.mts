import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "计算机组成原理",
  description: "计算机组成原理课程笔记",
  lang: "zh-CN",
  markdown: {
    math: true,
  },
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/src/logo_x128.ico', width: 24, height: 24 },

    outline: [2, 3],

    search: { provider: "local" },

    nav: [
      { text: "Home", link: "/" },
      { text: "Intro", link: "/README" },
    ],

    sidebar: sidebarGuide(),

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M29.303 32h-26.6A2.686 2.686 0 0 1 0 29.303v-26.6A2.686 2.686 0 0 1 2.697 0h26.704C30.802 0 32 1.197 32 2.697v26.605c0 1.5-1.197 2.697-2.697 2.697zM16 5.303h-4A6.7 6.7 0 0 0 5.303 12v8A6.7 6.7 0 0 0 12 26.697h8A6.7 6.7 0 0 0 26.697 20v-5.303c0-.796-.599-1.395-1.4-1.395H24c-.697 0-1.303-.605-1.303-1.303A6.7 6.7 0 0 0 16 5.296zm4.099 16H12c-.697 0-1.303-.605-1.303-1.303s.605-1.303 1.303-1.303h8.099c.704 0 1.303.6 1.303 1.303s-.599 1.303-1.303 1.303m-3.402-10.606c.704 0 1.303.605 1.303 1.303s-.599 1.303-1.303 1.303h-4.796c-.704 0-1.303-.605-1.303-1.303s.599-1.303 1.303-1.303z"/></svg>',
        },
        link: "https://cworld.top",
        ariaLabel: "Blog",
      },
      { icon: "github", link: "https://github.com/cworld1/ccp-learning" },
    ],

    footer: {
      message: "Released under the GPL-3 License.",
      copyright: "Copyright © 2023-present CWorld",
    },

    editLink: {
      pattern: "https://github.com/cworld1/ccp-learning/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Intro",
      items: [
        { text: "Project Intro", link: "/README" },
        { text: "0 课程简介", link: "/00-summary" },
      ],
    },
    {
      text: "Main",
      items: [
        {
          text: "1 概论",
          collapsed: true,
          items: [
            { text: "概论 (1~2)", link: "/01-introduction-1" },
            { text: "概论 (3~4)", link: "/02-introduction-2" },
          ],
        },
        {
          text: "2 数据的机器层次表示",
          collapsed: true,
          items: [
            {
              text: "数据的机器层次表示 (1~3)",
              link: "/03-m-level-repr-of-data-1",
            },
            {
              text: "数据的机器层次表示 (4~6)",
              link: "/04-m-level-repr-of-data-2",
            },
          ],
        },
        {
          text: "3 指令系统",
          collapsed: true,
          items: [
            { text: "指令系统 (1~3)", link: "/05-command-sys-1" },
            { text: "指令系统 (4~5)", link: "/06-command-sys-2" },
          ],
        },
        {
          text: "4 数值的机器运算",
          collapsed: true,
          items: [
            { text: "数值的机器运算 (1~3)", link: "/07-num-m-operation-1" },
            { text: "数值的机器运算 (4~6)", link: "/08-num-m-operation-2" },
            { text: "数值的机器运算 (7~9)", link: "/09-num-m-operation-3" },
          ],
        },
        {
          text: "5 存储系统和结构",
          collapsed: true,
          items: [
            {
              text: "存储系统和结构 (1~3)",
              link: "/10-stor-sys-and-struct-1",
            },
            {
              text: "存储系统和结构 (4~6)",
              link: "/11-stor-sys-and-struct-2",
            },
            {
              text: "存储系统和结构 (7~8)",
              link: "/12-stor-sys-and-struct-3",
            },
          ],
        },
        {
          text: "6 中央处理器",
          collapsed: true,
          items: [
            { text: "中央处理器 (1~3)", link: "/13-central-processor-1" },
            { text: "中央处理器 (4~6)", link: "/14-central-processor-2" },
            { text: "中央处理器 (7~8)", link: "/15-central-processor-3" },
          ],
        },
        {
          text: "7 总线",
          collapsed: true,
          items: [
            { text: "总线 (1~2)", link: "/16-bus-1" },
            { text: "总线 (3~4)", link: "/17-bus-2" },
          ],
        },
      ],
    },
    {
      text: "Extent",
      items: [
        {
          text: "8 外部设备",
          collapsed: true,
          items: [{ text: "外部设备 (1~3)", link: "/18-exter-device-1" }],
        },
      ],
    },
  ];
}
