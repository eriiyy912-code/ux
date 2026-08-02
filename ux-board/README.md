# 健康能量岛交互原型

这是基于 JDH Babel Codex Lib 视觉规范搭的第一版框架原型，先用于确认页面结构和互动链路。

## 文件

- `index.html`：主页面结构，包含抽奖、投票、直播、内容、商品 feeds 五个模块。
- `red-rain.html`：整点红包雨时期链路页，默认展示红包雨遮罩和中奖结果弹窗。
- `styles.css`：JDH 基础 token、页面布局、卡片、按钮、浮层样式。
- `app.js`：任务、健康值、抽奖、投票、直播掉落、测评、组队盲盒等基础交互。
- `design-board.html`：交互大画布，用于把主页面、后续页面、状态说明和连接关系放在同一张画布里扩展。

## 后续常改位置

- 改任务：`app.js` 里的 `state.tasks`。
- 改投票榜：`app.js` 里的 `state.ranks`。
- 改商品：`app.js` 里的 `state.products`。
- 改浮层内容：`app.js` 的 `sheetContent(type)`。
- 改视觉规范：`styles.css` 顶部 `:root` token。
