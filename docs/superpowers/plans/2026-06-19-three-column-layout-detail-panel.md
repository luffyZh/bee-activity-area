# 三栏详情面板布局实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将页面默认布局调整为 `3:7`，并在点击“查看详情”后切换为 `2.5:5:2.5` 的三栏布局。

**架构：** 左侧继续承载标题、当前判断与事件流；中间为雷达主区；右侧详情面板从雷达内部 Drawer 提升为页面级第三列。环境信息改为雷达顶部右侧的竖排整体卡，查看详情按钮放在雷达顶部左侧。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：重排页面网格比例

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 默认布局改成 `3:7`
- [ ] 详情展开后切换为 `2.5:5:2.5`
- [ ] 将详情面板从雷达组件内部提升为页面第三列

### 任务 2：重构雷达顶部工具区

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 将查看详情按钮放到雷达顶部左侧
- [ ] 将风速、光照、温度合并成竖排环境卡，放到雷达顶部右侧
- [ ] 保持雷达仍是中间主区的最大正方形主视觉

### 任务 3：改造详情面板为页面侧栏

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarDetailDrawer.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/pages/HomePage.tsx`

- [ ] 将详情组件改成页面右栏使用，不再依赖雷达内部宽度
- [ ] 保持内容结构和方向分层数据不变
- [ ] 保证展开和收起时页面整体不滚动

### 任务 4：验证与说明同步

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器验证默认两栏和展开三栏的比例切换
- [ ] README 同步当前布局规则
