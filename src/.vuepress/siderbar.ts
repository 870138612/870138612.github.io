import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            collapsible: true,
            text: "openstack",
            icon: "ops",
            prefix: "openstack/",
            children: "structure",
        },
        "intro.md"
    ],
});
