# 雷达详情 Drawer 与滚动修复实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 修复当前页面整页滚动问题，收紧左侧标题区，并为雷达区增加可挤压展开的方向分层详情 Drawer。

**架构：** 保持现有 `35 / 65` 左右布局不变，左侧仅展示标题、当前判断和事件证据流，右侧为雷达主区；点击雷达区“查看详情”后，在右侧内部展开一个 Drawer 展示东西南北分距离层活跃度，主雷达同步压缩但仍保持可读。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：收紧左侧信息栏

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 将标题改为“蜜蜂活跃范围监控大屏”
- [ ] 删除标题下描述文字
- [ ] 微调左侧信息块高度与间距，避免整体溢出

### 任务 2：修复雷达区高度与滚动

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 压缩雷达底部统计卡高度和内边距
- [ ] 收紧雷达容器的垂直占用，避免页面整体滚动
- [ ] 保持右侧雷达区在 1366x768 下仍完整显示

### 任务 3：补回方向分层数据

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/types/dashboard.ts`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/data/mockDashboard.ts`

- [ ] 添加方向分层活跃度类型定义
- [ ] 添加东西南北分距离层的 mock 数据
- [ ] 保证这些数据只服务 Drawer，不回到主页面常驻展示

### 任务 4：实现雷达详情 Drawer

**文件：**
- 创建：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarDetailDrawer.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 在雷达区增加“查看详情”按钮
- [ ] 点击后在右侧雷达区内部挤压展开 Drawer
- [ ] Drawer 中展示东西南北四方向的距离层活跃度数据
- [ ] 支持关闭 Drawer，并在收起后恢复主雷达宽度

### 任务 5：验证与同步说明

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 检查关键编辑文件诊断信息
- [ ] 同步 README 中当前页面结构描述
