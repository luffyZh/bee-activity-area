import type {
  DashboardState,
  DirectionActivityDetail,
  EventDetail,
  EventFeedItem,
  EventKey,
  EventPoolItem,
} from '../types/dashboard'

export const initialDashboardState: DashboardState = {
  radius: 860,
  north: 920,
  east: 880,
  south: 760,
  west: 680,
  rgb: 89.7,
  dvs: 643,
  valid: 426,
  confidence: 91,
}

export const eventDetails: Record<EventKey, EventDetail> = {
  north: {
    time: '13:27:22 · 事件详情',
    title: '北向 300-500 米轨迹贯通',
    desc: 'DVS 与 RGB 在同一时间窗内返回一致性结果，说明当前主花带触达稳定，可作为本轮有效授粉半径估算的关键证据。',
    direction: '北向',
    range: '300-500 米',
    tracks: '18 条',
    pollination: '12 次',
  },
  west: {
    time: '13:27:09 · 事件详情',
    title: '西向边界衰减提前出现',
    desc: '西向 500 米后的远距轨迹和落花事件同时减弱，提示该方向存在有效授粉边界提前收缩，建议将下一补点向西南侧平移。',
    direction: '西向',
    range: '500-1000 米',
    tracks: '9 条',
    pollination: '4 次',
  },
  dvs: {
    time: '13:26:48 · 事件详情',
    title: 'DVS 外环轨迹纳入估算',
    desc: '外环 DVS 哨点返回的远距轨迹切片达到可信阈值，已正式并入当前窗口的辐射半径计算流程。',
    direction: '东南向',
    range: '1000-1500 米',
    tracks: '3 条',
    pollination: '补充证据',
  },
  rgb: {
    time: '13:26:19 · 事件详情',
    title: 'RGB 确认连续落花停留',
    desc: '近场花区出现连续有效停留，停留时长高于阈值，支持将该时段判定为有效授粉活跃期。',
    direction: '近场样方',
    range: '0-100 米',
    tracks: '局部映射',
    pollination: '16 次',
  },
}

export const initialEventFeed: EventFeedItem[] = [
  {
    key: 'north',
    time: '13:27:22',
    title: '北向 300-500 米轨迹贯通',
    desc: 'DVS 持续捕获远距轨迹，RGB 同步确认主花带落花事件。',
    badge: '稳定',
    badgeTone: 'ok',
    thumb: 'dvs',
  },
  {
    key: 'west',
    time: '13:27:09',
    title: '西向边界衰减提前出现',
    desc: '建议将下一蜂箱补点向西南侧平移 120-180 米，并复核外环哨点。',
    badge: '建议',
    badgeTone: 'warn',
    thumb: 'rgb',
  },
  {
    key: 'dvs',
    time: '13:26:48',
    title: 'DVS 外环轨迹纳入估算',
    desc: '3 条远距切片达到可信阈值，已加入本轮半径融合计算。',
    badge: '纳入',
    badgeTone: 'ok',
    thumb: 'dvs',
  },
  {
    key: 'rgb',
    time: '13:26:19',
    title: 'RGB 确认连续落花停留',
    desc: '近场花区停留时长高于阈值，有效授粉事件增加。',
    badge: '确认',
    badgeTone: 'ok',
    thumb: 'rgb',
  },
]

export const eventPool: EventPoolItem[] = [
  { text: '北向样方连续出现落花事件，说明主花带贡献仍在提升。', type: 'ok' },
  { text: '东向 300-500 米环带轨迹稳定，外环补点暂不需要追加。', type: 'ok' },
  { text: '西向风扰动略增，若持续 2 个窗口建议校准半径阈值。', type: 'warn' },
  { text: 'DVS 事件吞吐保持正常，远距轨迹切片可继续纳入估算。', type: 'ok' },
  { text: 'RGB 近场样区确认有效停留事件，融合置信度继续上升。', type: 'ok' },
]

export const focusInsights = [
  {
    title: '融合判断',
    content: 'DVS 远距轨迹与 RGB 落花确认持续一致，当前活跃范围维持在稳定区间。',
    tone: 'ok' as const,
    badge: '稳定',
  },
  {
    title: '方向特征',
    content: '北向和东向边界更完整，西向存在提前衰减，建议重点观察西南侧补点。',
    tone: 'warn' as const,
    badge: '关注',
  },
  {
    title: '证据链',
    content: 'DVS 负责空间可达性，RGB 负责有效停留确认，两者共同支撑当前活跃范围判断。',
    tone: 'ok' as const,
    badge: '有效',
  },
]

export const directionActivityDetails: DirectionActivityDetail[] = [
  {
    direction: '北向',
    summary: '主花带连通性最好，外环活跃度仍保持高位。',
    layers: [
      { range: '0-500m', value: 92, state: 'high' },
      { range: '500-1000m', value: 86, state: 'high' },
      { range: '1000-1500m', value: 71, state: 'mid' },
      { range: '1500-2000m', value: 46, state: 'mid' },
    ],
  },
  {
    direction: '东向',
    summary: '轨迹连续性稳定，外环略弱于北向。',
    layers: [
      { range: '0-500m', value: 88, state: 'high' },
      { range: '500-1000m', value: 82, state: 'high' },
      { range: '1000-1500m', value: 66, state: 'mid' },
      { range: '1500-2000m', value: 39, state: 'mid' },
    ],
  },
  {
    direction: '南向',
    summary: '近场停留有效，远距层衰减相对明显。',
    layers: [
      { range: '0-500m', value: 79, state: 'high' },
      { range: '500-1000m', value: 68, state: 'mid' },
      { range: '1000-1500m', value: 51, state: 'mid' },
      { range: '1500-2000m', value: 28, state: 'low' },
    ],
  },
  {
    direction: '西向',
    summary: '风扰动偏高，500m 后活跃度下降更快。',
    layers: [
      { range: '0-500m', value: 72, state: 'mid' },
      { range: '500-1000m', value: 54, state: 'mid' },
      { range: '1000-1500m', value: 36, state: 'low' },
      { range: '1500-2000m', value: 18, state: 'low' },
    ],
  },
]
