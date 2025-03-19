import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            collapsible: true,
            text: "代码走读openstack",
            icon: "ops",
            prefix: "openstack/",
            children: "structure",
        },
        "intro.md"
    ],
});
