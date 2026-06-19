# 左侧信息区收敛与事件流滚动实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 删除左侧冗余信息块，扩大事件证据流显示空间，并将滚动限制在事件流容器内部。

**架构：** 保持整体 `3:7` / `2.5:5:2.5` 布局不变，仅精简左侧标题与当前判断内容，删除重复卡片和解释卡，将释放的垂直空间交给事件证据流列表；页面外层继续固定视口高度，事件流内部独立滚动。

**技术栈：** React、TypeScript、TailwindCSS

---

### 任务 1：精简左侧标题和当前判断

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 删除标题上方描述文字
- [ ] 删除“当前判断”中的三个小卡
- [ ] 保留大数字、时间和简短判断文案

### 任务 2：删除冗余判断卡并扩大事件流

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 删除“融合判断 / 方向特征 / 证据链”三个大卡
- [ ] 让事件证据流接管释放出的空间
- [ ] 保持左侧版式紧凑清晰

### 任务 3：实现事件流容器内滚动

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 让左侧列和页面根容器继续保持不滚动
- [ ] 让事件证据流列表区域 `overflow-y-auto`
- [ ] 确保内容溢出时仅事件流内部滚动

### 任务 4：验证

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器确认页面不滚动且事件证据流内部可滚动
