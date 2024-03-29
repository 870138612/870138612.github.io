import * as vue from 'vue';
import { PropType, VNode } from 'vue';
import sdk from '@stackblitz/sdk';

declare const _default: vue.DefineComponent<{
    /**
     * StackBlitz id
     *
     * @description Full StackBlitz url is also supported
     *
     * StackBlitz ID
     *
     * @description 也支持完整的 StackBlitz 链接
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * StackBlitz type
     *
     * StackBlitz 类型
     */
    type: {
        type: PropType<"project" | "github">;
        default: string;
    };
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Component width/height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The default file to open in the editor
     *
     * 默认打开的文件
     */
    file: {
        type: PropType<string | string[]>;
        default: string;
    };
    /**
     * The initial URL path the preview should open
     *
     * 预览的初始 URL 路径
     */
    initialPath: {
        type: StringConstructor;
        default: string;
    };
    /**
     * embed editor
     *
     * 嵌入编辑器
     */
    embed: BooleanConstructor;
    /**
     * Whether load embed demo directly
     *
     * 是否直接加载嵌入演示
     */
    load: BooleanConstructor;
    /**
     * Which view to open by default
     *
     * 默认打开的视图
     */
    view: {
        type: PropType<sdk.UiViewOption>;
        default: string;
    };
    /**
     * Hide file explorer panel in embed view
     *
     * 在嵌入视图中隐藏文件资源管理器面板
     */
    hideExplorer: BooleanConstructor;
    /**
     * Hide file explorer panel in embed view
     *
     * 在嵌入视图中隐藏文件资源管理器面板
     */
    hideNavigation: BooleanConstructor;
    /**
     * Hide the debugging console in the editor preview
     *
     * 隐藏编辑器预览中的调试控制台
     */
    hideDevtools: BooleanConstructor;
    /**
     * Height of the Terminal panel below the editor (as a percentage number).
     */
    terminalHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Height of the Terminal panel below the editor (as a percentage number).
     */
    devToolsHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Button text
     *
     * 按钮文字
     */
    text: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Theme
     *
     * 主题
     */
    theme: {
        type: PropType<sdk.UiThemeOption>;
        default: string;
    };
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * StackBlitz id
     *
     * @description Full StackBlitz url is also supported
     *
     * StackBlitz ID
     *
     * @description 也支持完整的 StackBlitz 链接
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * StackBlitz type
     *
     * StackBlitz 类型
     */
    type: {
        type: PropType<"project" | "github">;
        default: string;
    };
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Component width/height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * The default file to open in the editor
     *
     * 默认打开的文件
     */
    file: {
        type: PropType<string | string[]>;
        default: string;
    };
    /**
     * The initial URL path the preview should open
     *
     * 预览的初始 URL 路径
     */
    initialPath: {
        type: StringConstructor;
        default: string;
    };
    /**
     * embed editor
     *
     * 嵌入编辑器
     */
    embed: BooleanConstructor;
    /**
     * Whether load embed demo directly
     *
     * 是否直接加载嵌入演示
     */
    load: BooleanConstructor;
    /**
     * Which view to open by default
     *
     * 默认打开的视图
     */
    view: {
        type: PropType<sdk.UiViewOption>;
        default: string;
    };
    /**
     * Hide file explorer panel in embed view
     *
     * 在嵌入视图中隐藏文件资源管理器面板
     */
    hideExplorer: BooleanConstructor;
    /**
     * Hide file explorer panel in embed view
     *
     * 在嵌入视图中隐藏文件资源管理器面板
     */
    hideNavigation: BooleanConstructor;
    /**
     * Hide the debugging console in the editor preview
     *
     * 隐藏编辑器预览中的调试控制台
     */
    hideDevtools: BooleanConstructor;
    /**
     * Height of the Terminal panel below the editor (as a percentage number).
     */
    terminalHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Height of the Terminal panel below the editor (as a percentage number).
     */
    devToolsHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Button text
     *
     * 按钮文字
     */
    text: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Theme
     *
     * 主题
     */
    theme: {
        type: PropType<sdk.UiThemeOption>;
        default: string;
    };
}>>, {
    type: "project" | "github";
    width: string | number;
    embed: boolean;
    text: string;
    view: sdk.UiViewOption;
    load: boolean;
    height: string | number;
    ratio: string | number;
    theme: sdk.UiThemeOption;
    file: string | string[];
    initialPath: string;
    hideExplorer: boolean;
    hideNavigation: boolean;
    hideDevtools: boolean;
    terminalHeight: string | number;
    devToolsHeight: string | number;
}, {}>;

export { _default as default };
