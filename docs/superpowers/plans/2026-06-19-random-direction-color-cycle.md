# 四向颜色随机跳动实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 让雷达四个方向卡片的主数字颜色按时间随机跳动，同时每轮保持 `1 红 + 1 橙 + 2 绿` 的演示层次。

**架构：** 保持现有雷达布局不变，在 `RadarPanel` 内部新增一个轻量颜色轮换状态和定时器；每隔几秒随机重排四个方向对应的颜色档位，只作用于卡片数字文本。

**技术栈：** React、TypeScript、TailwindCSS

---

### 任务 1：新增随机颜色轮换逻辑

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 移除当前基于数值阈值的颜色函数
- [ ] 新增四个方向的颜色状态
- [ ] 新增定时随机重排逻辑，保证每轮为 `1 红 + 1 橙 + 2 绿`

### 任务 2：接入四向卡片数字

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 将随机颜色应用到四向卡片主数字
- [ ] 保持标题、说明和布局不变
- [ ] 保持颜色切换平滑，不影响现有动态更新

### 任务 3：验证

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器确认四向数字会随时间随机跳色
