# 雷达顶部工具区交换实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将雷达顶部的“查看详情”和环境信息区交换位置，并移除环境信息外层包裹卡片。

**架构：** 保持现有页面结构不变，仅调整 `RadarPanel` 顶部工具区的左右顺序和环境信息区域的外层视觉包装；继续保留 3 个独立环境小卡与现有交互逻辑。

**技术栈：** React、TypeScript、TailwindCSS

---

### 任务 1：交换顶部工具区位置

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 将环境信息区移到顶部左侧
- [ ] 将查看详情按钮移到顶部右侧
- [ ] 保持现有展开收起交互逻辑不变

### 任务 2：移除环境信息外层卡

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 去掉环境信息区外层包裹卡片边框和背景
- [ ] 只保留 3 个竖排小卡
- [ ] 保持整体对齐和顶部留白稳定

### 任务 3：验证

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器确认位置交换和外层卡片移除效果
