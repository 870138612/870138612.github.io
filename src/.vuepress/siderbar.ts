import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            collapsible: true,
            text: "Openstack",
            icon: "openstack",
            prefix: "openstack/",
            children: "structure",
        },
        "intro.md"
    ],
});
