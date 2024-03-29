import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar/index.js";
import {zhSidebar} from "./sidebar/index.js";


export default hopeTheme({
  logo: "/logo.png",

  author: {
    name: "ZYL1210",
    url: "https://ylzhong.top",
  },
  // pure: true,
  contributors: false,
  iconAssets: "//at.alicdn.com/t/c/font_4062992_b2cz8b2tqwo.css",
  docsDir: "src",
  repo: "https://github.com/870138612/870138612.github.io.git",
  //根据文件的名称进行排序
  sidebarSorter: ["readme", "order", "filename"],

  // navbar
  navbar: zhNavbar,
  // sidebar
  sidebar: zhSidebar,
  footer: "终将美好，我们的春夏秋冬。",
  copyright: "Copyright © 2023-present Liang",
  displayFooter: true,
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],
  blog: {
    sidebarDisplay:"mobile",
    intro: "/intro.html",
    // medias: {
    //   Gitee: "https://gitee.com/SnailClimb",
    // },
  },

  plugins: {

    blog: true,
    mdEnhance: {
      container: true,
      tabs: true,
      align: true,
      card: true
    },
    // comment: {
    //   provider: "Giscus",
    //   lazyLoading: false,
    //   repo: "870138612/zyl",
    //   repoId: "R_kgDOJw1i1g",
    //   category:"Announcements",
    //   categoryId:"DIC_kwDOJw1i1s4CXSr9"
    // },
  },
});
