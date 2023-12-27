import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "计算机组成原理",
  description: "计算机组成原理课程笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Intro",
        items: [{ text: "0 课程简介", link: "/00-summary" }],
      },
      {
        text: "Main",
        items: [
          {
            text: "1 概论",
            items: [
              { text: "概论 (1~2)", link: "/01-introduction-1" },
              { text: "概论 (3~4)", link: "/02-introduction-2" },
            ],
          },
          {
            text: "2 数据的机器层次表示",
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
            items: [
              { text: "指令系统 (1~3)", link: "/05-command-sys-1" },
              { text: "指令系统 (4~5)", link: "/06-command-sys-2" },
            ],
          },
          {
            text: "4 数值的机器运算",
            items: [
              { text: "数值的机器运算 (1~3)", link: "/07-num-m-operation-1" },
              { text: "数值的机器运算 (4~6)", link: "/08-num-m-operation-2" },
              { text: "数值的机器运算 (7~9)", link: "/09-num-m-operation-3" },
            ],
          },
          {
            text: "5 存储系统和结构",
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
            items: [
              { text: "中央处理器 (1~3)", link: "/13-central-processor-1" },
              { text: "中央处理器 (4~6)", link: "/14-central-processor-2" },
              { text: "中央处理器 (7~8)", link: "/15-central-processor-3" },
            ],
          },
          {
            text: "7 总线",
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
            items: [{ text: "外部设备 (1~3)", link: "/18-exter-device-1" }],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
