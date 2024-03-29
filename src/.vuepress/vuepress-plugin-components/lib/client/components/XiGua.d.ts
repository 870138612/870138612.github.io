import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * XiGua video id
     *
     * 西瓜视频 ID
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * XiGua video title
     *
     * 西瓜视频标题
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
     * Start time in seconds
     *
     * 基于秒数的开始时间
     */
    time: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Auto play
     *
     * 自动播放
     */
    autoplay: BooleanConstructor;
}, () => VNode[], unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * XiGua video id
     *
     * 西瓜视频 ID
     */
    id: {
        type: StringConstructor;
        required: true;
    };
    /**
     * XiGua video title
     *
     * 西瓜视频标题
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
     * Start time in seconds
     *
     * 基于秒数的开始时间
     */
    time: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Auto play
     *
     * 自动播放
     */
    autoplay: BooleanConstructor;
}>>, {
    title: string;
    width: string | number;
    time: string | number;
    autoplay: boolean;
    height: string | number;
    ratio: string | number;
}, {}>;

export { _default as default };
