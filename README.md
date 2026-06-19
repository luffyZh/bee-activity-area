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

- `src/pages/HomePage.tsx`：聚焦版页面装配，负责主视图和事件侧栏布局
- `src/components/`：固定右侧画布内的雷达主视图、方向详情 Drawer、事件弹层、基础面板等组件
- `src/data/mockDashboard.ts`：围绕 DVS / RGB 的本地 mock 数据、事件配置和方向分层数据
- `src/hooks/useDashboardSimulation.ts`：实时半径与事件流模拟
- `src/styles.css`：Tailwind 入口和少量主视觉样式

## 迁移说明

- 原始单文件 `index.html` 已迁移为 React 组件化结构
- 本版已移除蜂箱状态等无关模块，只保留活跃范围主视图、事件证据链和可按需展开的方向分层详情；右侧画布固定在视口内，不启用页面滚动，核心雷达按右侧主区中的最大正方形优先渲染
- 页面继续保留本地 mock 数据，后续可在 `src/data` 基础上接入真实接口
- 样式以 Tailwind 工具类为主，复杂雷达效果和事件缩略图效果保留在样式层统一维护
