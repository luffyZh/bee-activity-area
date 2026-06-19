# DVS RGB 聚焦改版实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将当前大屏收敛为围绕 `DVS + RGB` 感知蜜蜂活跃范围的聚焦版，采用 `35 / 65` 左右布局，移除蜂箱状态等无关模块，并修复布局拥挤、溢出和重叠问题。

**架构：** 页面改为 `35 / 65` 左右布局，左侧窄栏负责标题、当前判断、关键数值和事件证据流，右侧整块保留雷达主视觉；删除蜂箱状态、行为状态、方向分布等辅助模块，将必要摘要和关键指标收口到左栏与雷达内部。继续复用现有 React 组件结构，但简化 `HomePage` 与 `RadarPanel` 的布局职责。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：收敛页面信息范围

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/data/mockDashboard.ts`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/types/dashboard.ts`

- [ ] 删除蜂箱状态总览、行为与感知状态、方向分布与距离层等与当前演示目标无关的 UI 和数据
- [ ] 保留并精简 `DVS`、`RGB`、融合半径、置信度、事件流所需字段
- [ ] 将页面改为“左侧信息栏 + 右侧雷达主区”的单主线结构

### 任务 2：重构主视觉区布局

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/Panel.tsx`

- [ ] 压缩标题区高度，避免遮挡主内容
- [ ] 调整雷达区内部绝对定位元素，只保留中心值、四向边界和底部关键指标
- [ ] 将摘要文案和环境标签收敛到不干扰雷达阅读的区域

### 任务 3：重构事件侧栏

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/EventModal.tsx`

- [ ] 将左侧改为固定语义的信息栏，顶部放标题和一句结论摘要
- [ ] 控制事件卡数量、间距和高度，避免滚动区域与主区争抢空间
- [ ] 保留事件弹层，但让内容更贴近 DVS / RGB 证据链

### 任务 4：修复整体布局稳定性

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 将页面改为 `35 / 65` 左右布局，左侧为信息栏，右侧为雷达主区
- [ ] 修复大屏下的重叠和窄屏下的溢出，减少不必要的固定高度和绝对定位
- [ ] 保持 1366x768 与 1920x1080 下可读

### 任务 5：验证与收尾

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 检查关键编辑文件诊断信息
- [ ] 更新 README 中的页面定位描述
