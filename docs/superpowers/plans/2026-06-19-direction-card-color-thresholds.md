# 方向卡颜色阈值映射实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 让雷达四个方向卡片的主数字按距离阈值显示红、橙、绿三档颜色，以替代被遮挡的圆点颜色识别。

**架构：** 保持现有雷达布局不变，仅在 `RadarPanel` 中为方向值增加颜色分类函数，并将分类结果映射到主数字文本颜色；不新增布局元素，不修改数据结构。

**技术栈：** React、TypeScript、TailwindCSS

---

### 任务 1：实现阈值颜色映射

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 新增方向值到颜色档位的映射函数
- [ ] 将 `<500m` 映射为红色
- [ ] 将 `500m-1000m` 映射为橙色
- [ ] 将 `>=1000m` 映射为绿色

### 任务 2：应用到四向卡片数字

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 仅将方向卡片主数字改为阈值颜色
- [ ] 保持标题和说明文字原样
- [ ] 不改现有布局和位置

### 任务 3：验证

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器确认四向数字颜色已按阈值变化
