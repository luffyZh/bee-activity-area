# 右侧固定画布约束实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将右侧区域收敛为固定视口内的监控画布，保证不滚动、不溢出，并让雷达图在 Drawer 开关前后都保持居中显示。

**架构：** 右侧区域先锁定可用高度，再在该高度内分配轻量头部、中部雷达主图区和底部统计条；Drawer 只在右侧容器内部挤压展开，不能把主图挤出画布，也不能触发页面滚动。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：固定右侧容器约束

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 将页面高度分配改成右侧容器优先闭合，不允许溢出屏幕
- [ ] 保证右侧容器自身不出现滚动条
- [ ] 保留左侧信息栏的现有结构，不再让右侧画布受左侧内容牵连

### 任务 2：重排右侧画布内部结构

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 给右侧增加轻量头部，用于安放按钮和环境标签
- [ ] 将雷达主图区设为真正的中部主区域，保证图形居中
- [ ] 将底部三张统计卡压缩为轻量统计条，避免把主图挤到底部

### 任务 3：约束 Drawer 在画布内展开

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarDetailDrawer.tsx`

- [ ] 让 Drawer 只在右侧固定画布内部展开
- [ ] 保证 Drawer 打开后主雷达仍保持居中和可读
- [ ] 保证 Drawer 关闭后主雷达恢复居中状态

### 任务 4：验证与同步

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器验证右侧区域不开启滚动且雷达居中
- [ ] 同步 README 对当前右侧画布结构的描述
