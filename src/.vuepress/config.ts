import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math';
import { catalogPlugin } from "@vuepress/plugin-catalog";
export default defineUserConfig({

  base: "/",
  head: [
    ["meta", {name: "robots", content: "all"}],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', {rel: 'icon', href: '/assets/icon/favicon.ico'}
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zzz",
      description: "Zzz",

    },
  },
  theme,
  plugins: [
    markdownMathPlugin({
      // 选项

    }),
   ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
