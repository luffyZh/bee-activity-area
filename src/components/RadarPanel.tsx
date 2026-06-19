import { useEffect, useRef, useState } from 'react'

import { calcCoveragePoints, pointsToPolygon } from '../lib/dashboard'
import type { DashboardState } from '../types/dashboard'

interface RadarPanelProps {
  state: DashboardState
  detailOpen: boolean
  onToggleDetail: () => void
}

const heroStats = [
  { key: 'valid', label: 'RGB 确认事件', note: '近场有效停留样本' },
  { key: 'dvs', label: 'DVS 远距切片', note: '空间可达性证据' },
  { key: 'confidence', label: '融合可信度', note: 'DVS + RGB 联合评估' },
] as const

const directionCards = [
  { key: 'north', label: '北向', note: '花带触达良好', className: 'top-[5%] left-1/2 -translate-x-1/2' },
  { key: 'east', label: '东向', note: '轨迹密度稳定', className: 'top-1/2 right-[0.5%] -translate-y-1/2' },
  { key: 'south', label: '南向', note: '近场有效较强', className: 'bottom-[5%] left-1/2 -translate-x-1/2' },
  { key: 'west', label: '西向', note: '边界轻微衰减', className: 'top-1/2 left-[0.5%] -translate-y-1/2' },
] as const

const ringLabels = [
  { label: '500m', className: 'top-[1.5%] left-1/2 -translate-x-1/2' },
  { label: '1000m', className: 'bottom-[10%] left-[5%]' },
  { label: '2000m', className: 'bottom-[3.5%] left-[0.5%]' },
]

type DirectionKey = (typeof directionCards)[number]['key']

const directionColorClasses = ['text-emerald-300', 'text-emerald-300', 'text-amber-300', 'text-rose-400'] as const

function createDirectionColorMap() {
  const keys = [...directionCards.map((card) => card.key)]
  const shuffledKeys = keys.sort(() => Math.random() - 0.5)

  return shuffledKeys.reduce<Record<DirectionKey, string>>((accumulator, key, index) => {
    accumulator[key] = directionColorClasses[index]
    return accumulator
  }, {} as Record<DirectionKey, string>)
}

export function RadarPanel({ state, detailOpen, onToggleDetail }: RadarPanelProps) {
  const points = calcCoveragePoints(state)
  const polygonPoints = pointsToPolygon(points)
  const contentAreaRef = useRef<HTMLDivElement | null>(null)
  const [radarSize, setRadarSize] = useState(0)
  const [directionColors, setDirectionColors] = useState<Record<DirectionKey, string>>(() => createDirectionColorMap())

  useEffect(() => {
    const element = contentAreaRef.current

    if (!element) {
      return undefined
    }

    const updateRadarSize = () => {
      const width = element.clientWidth
      const height = Math.max(element.clientHeight, 0)
      const nextSize = Math.max(Math.min(width, height, 1080), 420)
      setRadarSize(nextSize)
    }

    updateRadarSize()

    const observer = new ResizeObserver(() => updateRadarSize())
    observer.observe(element)
    window.addEventListener('resize', updateRadarSize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateRadarSize)
    }
  }, [detailOpen])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirectionColors(createDirectionColorMap())
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="panel-shell relative flex h-full min-h-0 flex-col overflow-hidden px-4 py-4 md:px-5 md:py-5">
      <button
        type="button"
        onClick={onToggleDetail}
        className="absolute right-4 top-4 z-10 rounded-full border border-slate-700/80 bg-slate-900/75 px-4 py-2 text-sm text-slate-100 transition hover:border-emerald-300/40 hover:text-white md:right-5 md:top-5"
      >
        {detailOpen ? '收起详情' : '查看详情'}
      </button>

      <div ref={contentAreaRef} className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div
            className="relative aspect-square shrink-0 transition-[width,height] duration-300"
            style={{
              width: radarSize ? `${radarSize}px` : undefined,
              height: radarSize ? `${radarSize}px` : undefined,
            }}
          >
            <div className="radar-core" />
            <svg className="relative z-[2] h-full w-full" viewBox="0 0 800 800" aria-hidden="true">
              <defs>
                <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(83,245,170,0.18)" />
                  <stop offset="100%" stopColor="rgba(83,245,170,0)" />
                </radialGradient>
                <linearGradient id="pathStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7acbff" />
                  <stop offset="100%" stopColor="#53f5aa" />
                </linearGradient>
              </defs>

              <circle cx="400" cy="400" r="330" fill="url(#radialGlow)" opacity="0.8" />
              {[80, 130, 190, 250].map((radius) => (
                <circle
                  key={radius}
                  cx="400"
                  cy="400"
                  r={radius}
                  fill="none"
                  stroke="rgba(83,245,170,.16)"
                  strokeWidth="1.5"
                />
              ))}
              <circle cx="400" cy="400" r="320" fill="none" stroke="rgba(83,245,170,.2)" strokeWidth="2" />

              <line x1="400" y1="56" x2="400" y2="744" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
              <line x1="56" y1="400" x2="744" y2="400" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
              <line x1="141" y1="141" x2="659" y2="659" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
              <line x1="659" y1="141" x2="141" y2="659" stroke="rgba(255,255,255,.06)" strokeWidth="1" />

              <polygon
                points={polygonPoints}
                fill="rgba(83,245,170,.18)"
                stroke="url(#pathStroke)"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              {points.map((point, index) => {
                const fill = ['#53f5aa', '#7acbff', '#ffd876', '#53f5aa'][index]
                return <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r="8" fill={fill} />
              })}
            </svg>

            <div className="center-orb">
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">实时估计</div>
                <div className="mt-2 text-6xl font-extrabold leading-none text-emerald-300 md:text-7xl">
                  {Math.round(state.radius)}
                </div>
                <div className="mt-1.5 text-base text-emerald-50">米</div>
                <div className="mt-2 text-xs text-slate-400">活跃范围半径</div>
              </div>
            </div>

            {ringLabels.map((item) => (
              <div key={item.label} className={`ring-label ${item.className}`}>
                {item.label}
              </div>
            ))}

            {directionCards.map((card) => {
              const value = Math.round(state[card.key])
              const valueClassName = directionColors[card.key] ?? 'text-emerald-300'
              return (
                <div key={card.key} className={`direction-card ${card.className}`}>
                  <div className="text-[11px] text-slate-400">{card.label}</div>
                  <strong className={`mt-1 block text-[28px] font-semibold leading-none ${valueClassName}`}>{value}m</strong>
                  <span className="mt-1 block text-[11px] text-slate-300">{card.note}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-3 shrink-0 grid grid-cols-1 gap-2 md:grid-cols-3">
        {heroStats.map((item) => {
          const value =
            item.key === 'valid'
              ? state.valid
              : item.key === 'dvs'
                ? state.dvs
                : `${Math.round(state.confidence)}%`

          return (
            <div key={item.label} className="rounded-[16px] border border-slate-700/80 bg-slate-900/55 px-3.5 py-2.5">
              <div className="text-xs text-slate-400">{item.label}</div>
              <div className="mt-1 text-2xl font-semibold leading-none text-slate-50">{value}</div>
              <div className="mt-1 text-[11px] text-slate-300">{item.note}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
