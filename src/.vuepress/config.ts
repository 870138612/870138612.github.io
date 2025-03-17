import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
    
    base: "/",
    head: [
        ["meta", {name: "robots", content: "all"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
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
        searchPlugin({
            getExtraFields: (page) => page.content??[]
        })
    ],
});
