import * as vue from 'vue';
import { PropType, VNode } from 'vue';

declare global {
    interface Window {
        __CPEmbed: (selector: string) => void;
    }
}
declare const _default: vue.DefineComponent<{
    /**
     * CodePen link
     *
     * CodePen 链接
     */
    link: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen username
     *
     * CodePen 用户名
     */
    user: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen hash
     *
     * CodePen hash
     */
    slugHash: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen title
     *
     * CodePen 标题
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen height
     *
     * CodePen 高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * CodePen theme
     *
     * CodePen 主题
     */
    theme: {
        type: PropType<"default" | "light" | "dark">;
        default: string;
    };
    /**
     * CodePen default tab
     *
     * CodePen 默认标签
     */
    defaultTab: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * CodePen loading status
     *
     * CodePen 加载状态
     */
    status: {
        type: PropType<"autoload" | "preview" | "clicktorun">;
        default: string;
    };
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * CodePen link
     *
     * CodePen 链接
     */
    link: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen username
     *
     * CodePen 用户名
     */
    user: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen hash
     *
     * CodePen hash
     */
    slugHash: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen title
     *
     * CodePen 标题
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * CodePen height
     *
     * CodePen 高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * CodePen theme
     *
     * CodePen 主题
     */
    theme: {
        type: PropType<"default" | "light" | "dark">;
        default: string;
    };
    /**
     * CodePen default tab
     *
     * CodePen 默认标签
     */
    defaultTab: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * CodePen loading status
     *
     * CodePen 加载状态
     */
    status: {
        type: PropType<"autoload" | "preview" | "clicktorun">;
        default: string;
    };
}>>, {
    title: string;
    link: string;
    height: string | number;
    theme: "default" | "light" | "dark";
    user: string;
    slugHash: string;
    defaultTab: string[];
    status: "autoload" | "preview" | "clicktorun";
}, {}>;

export { _default as default };
