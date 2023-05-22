export const data = JSON.parse("{\"key\":\"v-d0bf4a88\",\"path\":\"/java/3juc/4synchronizedlock.html\",\"title\":\"synchronized锁优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"synchronized锁优化\",\"icon\":\"page\",\"category\":[\"Java\"],\"tag\":[\"synchronized锁优化\",\"八股\"],\"description\":\"锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/java/3juc/4synchronizedlock.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"LIANG\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"synchronized锁优化\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-05-18T09:58:54.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ZYL1210\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"synchronized锁优化\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"八股\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-05-18T09:58:54.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"synchronized锁优化\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-05-18T09:58:54.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ZYL1210\\\",\\\"url\\\":\\\"https://localhost\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"自旋锁与自适应自旋\",\"slug\":\"自旋锁与自适应自旋\",\"link\":\"#自旋锁与自适应自旋\",\"children\":[]},{\"level\":2,\"title\":\"锁消除\",\"slug\":\"锁消除\",\"link\":\"#锁消除\",\"children\":[]},{\"level\":2,\"title\":\"锁粗化\",\"slug\":\"锁粗化\",\"link\":\"#锁粗化\",\"children\":[]},{\"level\":2,\"title\":\"轻量级锁\",\"slug\":\"轻量级锁\",\"link\":\"#轻量级锁\",\"children\":[]},{\"level\":2,\"title\":\"偏向锁\",\"slug\":\"偏向锁\",\"link\":\"#偏向锁\",\"children\":[]}],\"git\":{\"createdTime\":1684317269000,\"updatedTime\":1684403934000,\"contributors\":[{\"name\":\"ZYL1210\",\"email\":\"870138612@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":3.43,\"words\":1029},\"filePathRelative\":\"java/3juc/4synchronizedlock.md\",\"localizedDate\":\"2023年5月17日\",\"excerpt\":\"<p>锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。</p>\\n\",\"autoDesc\":true}")