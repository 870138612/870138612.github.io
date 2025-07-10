import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            collapsible: true,
            text: "k8s",
            icon: "k8s",
            prefix: "k8s/",
            children: "structure",
        },
        "intro.md"
    ],
});
