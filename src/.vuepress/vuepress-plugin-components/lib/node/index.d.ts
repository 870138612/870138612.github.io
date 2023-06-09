import { RequiredLocaleConfig } from 'vuepress-shared';
import { Option } from 'artplayer/types/option.js';
import { LocaleConfig, PluginFunction } from '@vuepress/core';

type ArtPlayerOptions = Partial<Omit<Option, "container" | "url" | "type" | "customType" | "plugins" | "contextmenu" | "controls" | "layers" | "settings">>;

/**
 * @deprecated Use `vuepress-plugin-auto-catalog` instead
 */
interface CatalogLocaleData {
    /**
     * Catalog title text
     *
     * 目录标题文字
     */
    title: string;
}
/**
 * @deprecated Use `vuepress-plugin-auto-catalog` instead
 */
type CatalogLocaleConfig = RequiredLocaleConfig<CatalogLocaleData>;

interface BackToTopLocaleData {
    /**
     * Back to top button label text
     *
     * 返回顶部文字
     */
    backToTop: string;
}
type BackToTopLocaleConfig = RequiredLocaleConfig<BackToTopLocaleData>;
interface PDFLocaleData {
    /**
     * PDF hint text
     *
     * @description Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
     * [url] will be replaced by actual PDF link.
     *
     * PDF 提示文字
     *
     * @description 只有在浏览器不支持嵌入 PDF 且没有提供 PDFJS URL 时才会使用
     * [url] 会被实际 PDF 链接替换
     */
    hint: string;
}
type PDFLocaleConfig = RequiredLocaleConfig<PDFLocaleData>;
interface SiteInfoLocaleData {
    /**
     * Source text
     *
     * 源代码文字
     */
    source: string;
}
type SiteInfoLocaleConfig = RequiredLocaleConfig<SiteInfoLocaleData>;

interface NoticeActionOption {
    /**
     * Action text
     *
     * 操作文字
     */
    text: string;
    /**
     * Action link
     *
     * 操作链接
     */
    link?: string;
    /**
     * Action type
     *
     * 操作类型
     *
     * @default "default"
     */
    type?: "primary" | "default";
}
interface NoticeItemOptions {
    /**
     * Notice title
     *
     * 通知标题
     */
    title: string;
    /**
     * Notice content
     *
     * 通知内容
     */
    content: string;
    /**
     * Notice key
     *
     * @description Used to identify and store the notice status
     *
     * Notice 的 key
     *
     * @description 用于标识和存储 notice 的状态
     */
    key?: string;
    /**
     * Whether show notice only once or show it in every visit
     *
     * 是否只显示一次通知
     *
     * @default false
     */
    showOnce?: boolean;
    /**
     * Whether the notice shall be confirmed
     *
     * 通知是否需要确认
     *
     * @default false
     */
    confirm?: boolean;
    /**
     * Whether the notice should appear fullscreen
     *
     * 通知是否应该全屏显示
     *
     * @default false
     */
    fullscreen?: boolean;
    /**
     * Notice actions
     *
     * 通知操作
     */
    actions?: NoticeActionOption[];
}
type NoticeOptions = NoticeItemOptions & ({
    path: string;
} | {
    match: RegExp;
});
type NoticeClientOptions = Omit<NoticeItemOptions, "key"> & {
    noticeKey?: string;
} & ({
    path: string;
} | {
    match: string;
});

type ShareAction = "open" | "navigate" | "popup" | "qrcode";
type BuiltInShareService = "buffer" | "douban" | "email" | "evernote" | "facebook" | "flipboard" | "line" | "qq" | "qrcode" | "reddit" | "skype" | "telegram" | "twitter" | "whatsapp" | "weibo";
type ShareServiceVariableName = "title" | "description" | "url" | "excerpt" | "summary" | "tags" | "cover" | "image" | "twitterUserName";
interface ShareServiceConfig {
    /**
     * Share link
     *
     * @description You can use `[` and `]` to wrap the variable name, and the variable will be replaced with the value of the page.:
     *
     * - `title` will be replaced with the title of the page
     * - `description` will be replaced with the description of the page
     * - `url` will be replaced with the url of the page
     * - `summary` will be replaced with the summary of the page
     * - `tags` will be replaced with the tags of the page
     * - `cover` will be replaced with the cover/banner of the page
     * - `image` will be replaced with the first image of the page
     *
     * 分享链接
     *
     * @description 你可以使用 `[` 和 `]` 包裹变量名，变量将会被替换为页面的值：
     *
     * - `title` 将会被替换为页面的标题
     * - `description` 将会被替换为页面的描述
     * - `url` 将会被替换为页面的链接
     * - `summary` 将会被替换为页面的综述
     * - `tags` 将会被替换为页面的标签
     * - `cover` 将会被替换为页面的封面
     * - `image` 将会被替换为页面的第一张图片
     */
    link: string;
    /**
     * Action of share button
     *
     * @description
     * - `open` will open the link in a new tab
     * - `navigate` will navigate to the link
     * - `popup` will open a popup window
     * - `qrcode` will show a QR code with link
     *
     * 分享按钮的行为
     *
     * @description
     * - `open` 将会在新标签页打开链接
     * - `navigate` 将会跳转到链接
     * - `popup` 将会打开一个弹窗
     * - `qrcode` 将会显示一个二维码
     *
     * @default "popup"
     */
    action?: ShareAction;
    /**
     * Theme color of icon
     *
     * 图标的主题色
     *
     * @default 'currentColor'
     */
    color?: string;
    /**
     * Plain icon shape
     *
     * 纯色图标的形状
     */
    shape: string;
    /**
     * Colorful icon
     *
     * 彩色图标
     */
    icon?: string;
}
interface ShareServiceOptions extends ShareServiceConfig {
    /**
     * Service name
     *
     * 服务名称
     */
    name: string;
}
type ShareService = BuiltInShareService | ShareServiceOptions;

declare const backToTopLocales: BackToTopLocaleConfig;

declare const pdfLocaleConfig: PDFLocaleConfig;

declare const siteInfoLocaleConfig: SiteInfoLocaleConfig;

interface BackToTopOptions {
    /**
     * Scroll threshold distance to display back to top button (in pixels)
     *
     * 滚动距离阈值，用于显示返回顶部按钮 (单位: 像素)
     *
     * @default 100
     */
    threshold?: number;
    /**
     * Whether display scroll progress
     *
     * 是否显示滚动进度
     *
     * @default true
     */
    progress?: boolean;
}

type Link = `/${string}` | `//${string}` | `http://${string}` | `https://${string}`;
type BuiltInFontIcon = "iconify" | "iconfont" | "fontawesome" | "fontawesome-with-brands";
type FontIconAssets = BuiltInFontIcon | Link | (BuiltInFontIcon | Link)[];
interface FontIconOptions {
    /**
     * Link of font icon asset
     *
     * 字体图标资源链接
     *
     * @description `"iconify"`, `"iconfont"`, `"fontawesome"` and `"fontawesome-with-brands"` keywords are supported
     */
    assets?: FontIconAssets;
    /**
     * Class prefix of font icon
     *
     * 字体图标的 Class 前缀
     *
     * @default ""
     */
    prefix?: string;
}

type AvailableComponent = "ArtPlayer" | "AudioPlayer" | "Badge" | "BiliBili" | "CodePen" | "FontIcon" | "PDF" | "Replit" | "Share" | "StackBlitz" | "SiteInfo" | "VideoPlayer" | "XiGua" | "YouTube";

interface ShareOptions {
    /**
     * Service to be enabled
     *
     * 需要被启用的服务
     */
    services: ShareService[];
    /**
     * Main content selector
     *
     * @description used to select page content
     *
     * 主要内容选择器
     *
     * @description 用于选择页面内容
     *
     * @default '.theme-default-content'
     */
    contentSelector?: string;
    /**
     * Your twitter twitter user name
     *
     * @description required when you are using twitter service
     *
     * 你的 twitter 用户名
     *
     * @description required when you are using twitter service
     */
    twitterUserName?: string;
}

interface ComponentGlobalOptions {
    /**
     * ArtPlayer config
     *
     * ArtPlayer 配置
     */
    artPlayer?: ArtPlayerOptions;
    /**
     * FontIcon config
     *
     * 图标配置
     */
    fontIcon?: FontIconOptions;
    /**
     * PDF viewer config
     *
     * PDF 阅读器配置
     */
    pdf?: {
        /**
         * Location of pdfjs
         *
         * pdfjs 的位置
         */
        pdfjs?: string;
    };
    /**
     * Share config
     *
     * 分享配置
     */
    share?: ShareOptions;
}

interface ComponentLocaleOptions {
    /**
     * backToTop button Locales config
     *
     * 返回顶部按钮国际化配置
     */
    backToTop?: LocaleConfig<BackToTopLocaleData>;
    /**
     * @deprecated
     *
     * Catalog Locales config
     *
     * 目录组件国际化配置
     */
    catalog?: LocaleConfig<CatalogLocaleData>;
    /**
     * PDF Locales config
     *
     * PDF 组件国际化配置
     */
    pdf?: LocaleConfig<PDFLocaleData>;
    /**
     * SiteInfo Locales config
     *
     * 站点信息 组件国际化配置
     */
    siteInfo?: LocaleConfig<SiteInfoLocaleData>;
}

interface RootComponentOptions {
    /**
     * Add This 的公开 ID
     *
     * Public ID for add this
     */
    addThis?: string;
    /**
     * Back to top button config
     *
     * 返回顶部按钮配置
     */
    backToTop?: BackToTopOptions | boolean;
    /**
     * Global notice config
     *
     * 全局通知配置
     */
    notice?: NoticeOptions[];
}

interface ComponentOptions {
    /**
     * Components to be registered
     *
     * 需要被注册的组件
     *
     * @default []
     */
    components?: AvailableComponent[];
    /**
     * Global config for components
     *
     * 组件全局配置
     */
    componentOptions?: ComponentGlobalOptions;
    /**
     * Root config for components
     *
     * 根组件配置
     */
    rootComponents?: RootComponentOptions;
    /**
     * Component Locales
     *
     * 组件多语言
     */
    locales?: ComponentLocaleOptions;
}

declare const componentsPlugin: (options: ComponentOptions, legacy?: boolean) => PluginFunction;

export { ArtPlayerOptions, AvailableComponent, BackToTopLocaleConfig, BackToTopLocaleData, BackToTopOptions, BuiltInFontIcon, BuiltInShareService, CatalogLocaleConfig, CatalogLocaleData, ComponentOptions, FontIconAssets, FontIconOptions, NoticeActionOption, NoticeClientOptions, NoticeItemOptions, NoticeOptions, PDFLocaleConfig, PDFLocaleData, ShareAction, ShareService, ShareServiceConfig, ShareServiceOptions, ShareServiceVariableName, SiteInfoLocaleConfig, SiteInfoLocaleData, backToTopLocales, componentsPlugin, pdfLocaleConfig, siteInfoLocaleConfig };
