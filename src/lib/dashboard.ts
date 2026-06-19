import type { DashboardState, EventFeedItem, EventPoolItem, EventThumb } from '../types/dashboard'

export interface ClockInfo {
  time: string
  date: string
}

export interface CoveragePoint {
  x: number
  y: number
}

const CENTER = 400

export function formatClock(now: Date): ClockInfo {
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')

  return {
    time: `${hh}:${mm}:${ss}`,
    date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate(),
    ).padStart(2, '0')} · 向日葵田 A 区`,
  }
}

export function drift(base: number, delta: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, base + (Math.random() * 2 - 1) * delta))
}

export function tickDashboardState(current: DashboardState): DashboardState {
  const next = {
    ...current,
    north: drift(current.north, 26, 820, 980),
    east: drift(current.east, 24, 780, 940),
    south: drift(current.south, 20, 660, 840),
    west: drift(current.west, 18, 560, 760),
    rgb: drift(current.rgb, 0.4, 87, 93),
    dvs: Math.round(drift(current.dvs, 22, 580, 720)),
    valid: Math.round(drift(current.valid, 16, 380, 470)),
    confidence: drift(current.confidence, 0.6, 88, 94),
  }

  next.radius = Math.round((next.north + next.east + next.south + next.west) / 4)
  return next
}

export function createEventFeedItem(poolItem: EventPoolItem, now: Date): EventFeedItem {
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')

  const map = {
    ok: {
      badge: '稳定',
      title: '轨迹稳定更新',
      key: 'north',
      thumb: 'dvs',
    },
    warn: {
      badge: '建议',
      title: '边界衰减提示',
      key: 'west',
      thumb: 'rgb',
    },
    alert: {
      badge: '注意',
      title: '融合阈值波动',
      key: 'west',
      thumb: 'rgb',
    },
  } as const

  const target = map[poolItem.type]

  return {
    key: target.key,
    time: `${hh}:${mm}:${ss}`,
    title: target.title,
    desc: poolItem.text,
    badge: target.badge,
    badgeTone: poolItem.type,
    thumb: target.thumb as EventThumb,
  }
}

export function calcCoveragePoints(state: DashboardState): CoveragePoint[] {
  const toRadius = (value: number) => 80 + (value / 1000) * 240
  const polarToCartesian = (radius: number, angleDeg: number): CoveragePoint => {
    const radians = ((angleDeg - 90) * Math.PI) / 180
    return {
      x: CENTER + radius * Math.cos(radians),
      y: CENTER + radius * Math.sin(radians),
    }
  }

  return [
    polarToCartesian(toRadius(state.north), 0),
    polarToCartesian(toRadius(state.east), 90),
    polarToCartesian(toRadius(state.south), 180),
    polarToCartesian(toRadius(state.west), 270),
  ]
}

export function pointsToPolygon(points: CoveragePoint[]): string {
  return points.map(({ x, y }) => `${x},${y}`).join(' ')
}
