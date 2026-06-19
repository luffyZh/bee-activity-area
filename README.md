# 蜜蜂活跃范围监控大屏

基于 `Vite + React + TypeScript + TailwindCSS` 重构的演示大屏，当前版本聚焦 `DVS + RGB` 感知蜜蜂活跃范围，展示实时半径主视图、事件证据流以及可展开的方向分层详情 Drawer。

## 启动方式

```bash
npm install
npm run dev
```

默认开发地址为 [http://localhost:5173](http://localhost:5173)。

## 构建

```bash
npm run build
```

## 目录说明

- `src/pages/HomePage.tsx`：聚焦版页面装配，负责默认 `3:7` 与展开后 `2.5:5:2.5` 的布局切换
- `src/components/`：雷达主视图、页面级方向详情侧栏、事件弹层、基础面板等组件
- `src/data/mockDashboard.ts`：围绕 DVS / RGB 的本地 mock 数据、事件配置和方向分层数据
- `src/hooks/useDashboardSimulation.ts`：实时半径与事件流模拟
- `src/styles.css`：Tailwind 入口和少量主视觉样式

## 迁移说明

- 原始单文件 `index.html` 已迁移为 React 组件化结构
- 本版已移除蜂箱状态等无关模块，只保留活跃范围主视图、事件证据链和可按需展开的方向分层详情
- 默认布局为 `3:7`，点击“查看详情”后切换为 `2.5:5:2.5`
- 一期已移除环境信息小卡，雷达顶部仅保留“查看详情”，核心雷达按中间主区中的最大正方形优先渲染
- 四向卡片主数字采用演示态随机跳色，每轮保持 `1 红 + 1 橙 + 2 绿`，用于增强方向层次感
- 左侧当前版本仅保留主标题、当前判断和事件证据流，事件过多时在容器内部滚动，页面本身不滚动
- 页面继续保留本地 mock 数据，后续可在 `src/data` 基础上接入真实接口
- 样式以 Tailwind 工具类为主，复杂雷达效果和事件缩略图效果保留在样式层统一维护
