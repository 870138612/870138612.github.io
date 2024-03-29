import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * BiliBili video id
     *
     * B 站视频 ID
     */
    bvid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video aid
     *
     * B 站视频 a ID
     */
    aid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video cid
     *
     * B 站视频 CID
     */
    cid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video title
     *
     * B 站视频标题
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video page
     *
     * B 站视频分页
     */
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
     * Start time in seconds
     *
     * 基于秒数的开始时间
     */
    time: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Whether autoplay
     *
     * 是否自动播放
     */
    autoplay: BooleanConstructor;
}, () => VNode[] | null, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * BiliBili video id
     *
     * B 站视频 ID
     */
    bvid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video aid
     *
     * B 站视频 a ID
     */
    aid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video cid
     *
     * B 站视频 CID
     */
    cid: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video title
     *
     * B 站视频标题
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * BiliBili video page
     *
     * B 站视频分页
     */
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
     * Start time in seconds
     *
     * 基于秒数的开始时间
     */
    time: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Whether autoplay
     *
     * 是否自动播放
     */
    autoplay: BooleanConstructor;
}>>, {
    title: string;
    width: string | number;
    time: string | number;
    autoplay: boolean;
    height: string | number;
    bvid: string;
    aid: string;
    cid: string;
    page: string | number;
    ratio: string | number;
}, {}>;

export { _default as default };
