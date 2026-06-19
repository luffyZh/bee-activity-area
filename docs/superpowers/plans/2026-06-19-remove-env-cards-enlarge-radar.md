# 移除环境卡并放大雷达实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 移除顶部环境信息小卡，并将释放出的空间重新分配给核心雷达主图。

**架构：** 保持当前 `3:7` / `2.5:5:2.5` 页面布局不变，只收缩雷达顶部工具区，保留右上“查看详情”；同时扩大雷达主图区的最大可用尺寸，并微调中心圆和方向卡片比例，让核心图成为更强的主视觉。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：移除顶部环境卡

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 删除顶部 3 个环境小卡渲染
- [ ] 只保留右上“查看详情”按钮
- [ ] 清理不再使用的样式定义

### 任务 2：放大核心雷达

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 将顶部空出的空间返还给雷达主图区
- [ ] 放大主雷达尺寸上限
- [ ] 微调中心圆和方向卡片比例，避免主图放大后内部元素显得偏小

### 任务 3：验证

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器确认顶部环境卡已删除且核心雷达明显放大
