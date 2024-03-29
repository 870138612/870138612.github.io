import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * YouTube video id
     *
     * YouTube 视频 id
     */
    id: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Youtube video title
     *
     * Youtube 视频标题
     */
    title: {
        type: StringConstructor;
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
     * Whether to autoplay the video
     *
     * 是否自动播放视频
     */
    autoplay: BooleanConstructor;
    /**
     * Whether to loop the video
     *
     * 是否循环播放视频
     */
    loop: BooleanConstructor;
    /**
     * Whether to show cc
     *
     * 是否显示字幕
     */
    showCc: BooleanConstructor;
    /**
     * Whether to show annotations
     *
     * 是否显示注释
     */
    showAnnotations: BooleanConstructor;
    /**
     * Video start time in seconds
     *
     * 视频开始时间 (秒)
     */
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Video end time in seconds
     *
     * 视频结束时间 (秒)
     */
    end: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Default cc lang
     *
     * 默认字幕语言
     */
    defaultCcLang: {
        type: StringConstructor;
        default: string;
    };
    /**
     * UI language
     *
     * UI 语言
     */
    uiLang: {
        type: StringConstructor;
        default: string;
    };
    /**
     * List type
     *
     * 列表类型
     */
    listType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * List
     *
     * 列表
     */
    list: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Playlist id
     *
     * 播放列表 id
     */
    playlist: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether to disable controls
     *
     * 是否禁用控制
     */
    disableControls: BooleanConstructor;
    /**
     * Whether to disable fullscreen
     *
     * 是否禁用全屏
     */
    disableFullscreen: BooleanConstructor;
    /**
     * Whether to disable keyboard
     *
     * 是否禁用键盘
     */
    disableKeyboard: BooleanConstructor;
}, () => VNode[] | null, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * YouTube video id
     *
     * YouTube 视频 id
     */
    id: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Youtube video title
     *
     * Youtube 视频标题
     */
    title: {
        type: StringConstructor;
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
     * Whether to autoplay the video
     *
     * 是否自动播放视频
     */
    autoplay: BooleanConstructor;
    /**
     * Whether to loop the video
     *
     * 是否循环播放视频
     */
    loop: BooleanConstructor;
    /**
     * Whether to show cc
     *
     * 是否显示字幕
     */
    showCc: BooleanConstructor;
    /**
     * Whether to show annotations
     *
     * 是否显示注释
     */
    showAnnotations: BooleanConstructor;
    /**
     * Video start time in seconds
     *
     * 视频开始时间 (秒)
     */
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Video end time in seconds
     *
     * 视频结束时间 (秒)
     */
    end: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Default cc lang
     *
     * 默认字幕语言
     */
    defaultCcLang: {
        type: StringConstructor;
        default: string;
    };
    /**
     * UI language
     *
     * UI 语言
     */
    uiLang: {
        type: StringConstructor;
        default: string;
    };
    /**
     * List type
     *
     * 列表类型
     */
    listType: {
        type: StringConstructor;
        default: string;
    };
    /**
     * List
     *
     * 列表
     */
    list: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Playlist id
     *
     * 播放列表 id
     */
    playlist: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether to disable controls
     *
     * 是否禁用控制
     */
    disableControls: BooleanConstructor;
    /**
     * Whether to disable fullscreen
     *
     * 是否禁用全屏
     */
    disableFullscreen: BooleanConstructor;
    /**
     * Whether to disable keyboard
     *
     * 是否禁用键盘
     */
    disableKeyboard: BooleanConstructor;
}>>, {
    title: string;
    width: string | number;
    loop: boolean;
    autoplay: boolean;
    height: string | number;
    ratio: string | number;
    id: string;
    showCc: boolean;
    showAnnotations: boolean;
    start: string | number;
    end: string | number;
    defaultCcLang: string;
    uiLang: string;
    listType: string;
    list: string;
    playlist: string;
    disableControls: boolean;
    disableFullscreen: boolean;
    disableKeyboard: boolean;
}, {}>;

export { _default as default };
