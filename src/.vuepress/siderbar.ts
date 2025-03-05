import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            collapsible: true,
            text: "Openstack代码相关",
            icon: "openstack",
            prefix: "openstack/",
            children: "structure",
        },
        "intro.md"
    ],
});
