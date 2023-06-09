import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [

    {
      collapsible: true,
      text: "Java",
      icon: "java",
      prefix: "java/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "计算机基础",
      icon: "computer",
      prefix: "computer/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "数据库",
      icon: "database",
      prefix: "database/",
      children: "structure",
    },

    {
      collapsible: true,
      text: "中间件云原生",
      icon: "middleware",
      prefix: "middleware/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "框架",
      icon: "framework",
      prefix: "framework/",
      children: "structure",
    },

    {
      collapsible: true,
      text: "笔记",
      icon: "note",
      prefix: "note/",
      children: "structure",
    },
    {
      collapsible: true,
      text: "面经",
      icon: "interview",
      prefix: "interview/",
      children: "structure",
    },

    {
      collapsible: true,
      text: "拍拍",
      icon: "photo",
      prefix: "photo/",
      children: "structure",
    },
    "intro"

  ],
});
