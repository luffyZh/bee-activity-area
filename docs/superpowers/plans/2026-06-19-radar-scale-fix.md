# 核心雷达比例修复实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将核心雷达恢复为右侧主区中的最大正方形主视觉，修正当前被过度缩小的问题。

**架构：** 保持右侧固定画布约束不变，仅调整 `RadarPanel` 中雷达主图区的尺寸计算与内部定位逻辑；雷达大小优先由右侧中部主区的最大可用正方形决定，Drawer 打开后再按剩余宽度自适应，但仍优先保证主图可读。

**技术栈：** React、TypeScript、TailwindCSS、SVG

---

### 任务 1：修正雷达主图区尺寸策略

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`

- [ ] 去掉当前导致雷达过度收缩的尺寸策略
- [ ] 让雷达画布以右侧中部可用空间的最大正方形为准
- [ ] 保证 Drawer 开启和关闭时雷达都保持居中显示

### 任务 2：校正雷达内部元素比例

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/components/RadarPanel.tsx`
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/src/styles.css`

- [ ] 校正中心数值圆、方向卡片和环形标签相对比例
- [ ] 避免方向卡片重新挤回中心区域
- [ ] 保持底部统计条不再压缩主图视觉尺寸

### 任务 3：验证与同步

**文件：**
- 修改：`/Users/luffyzh/luffyzh/github/profit-projects/bee-activity-area/README.md`

- [ ] 运行 `npm run build`
- [ ] 运行 `npm run lint`
- [ ] 浏览器验证雷达主图已恢复为右侧主区里的最大正方形
- [ ] README 同步当前右侧主图优先策略
