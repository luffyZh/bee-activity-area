export type EventKey = 'north' | 'west' | 'dvs' | 'rgb'

export type EventThumb = 'dvs' | 'rgb'

export interface DashboardState {
  radius: number
  north: number
  east: number
  south: number
  west: number
  rgb: number
  dvs: number
  valid: number
  confidence: number
}

export interface EventDetail {
  time: string
  title: string
  desc: string
  direction: string
  range: string
  tracks: string
  pollination: string
}

export interface EventFeedItem {
  key: EventKey
  time: string
  title: string
  desc: string
  badge: string
  badgeTone: 'ok' | 'warn' | 'alert'
  thumb: EventThumb
}

export interface EventPoolItem {
  text: string
  type: 'ok' | 'warn' | 'alert'
}

export interface DirectionLayerActivity {
  range: string
  value: number
  state: 'high' | 'mid' | 'low'
}

export interface DirectionActivityDetail {
  direction: '北向' | '东向' | '南向' | '西向'
  summary: string
  layers: DirectionLayerActivity[]
}
