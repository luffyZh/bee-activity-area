import { useEffect, useMemo, useState } from 'react'

import { EventModal } from '../components/EventModal'
import { Panel } from '../components/Panel'
import { RadarPanel } from '../components/RadarPanel'
import { directionActivityDetails, focusInsights } from '../data/mockDashboard'
import { useDashboardSimulation } from '../hooks/useDashboardSimulation'
import type { EventKey } from '../types/dashboard'

export function HomePage() {
  const { state, clock, eventFeed } = useDashboardSimulation()
  const [activeEvent, setActiveEvent] = useState<EventKey | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  useEffect(() => {
    if (!activeEvent) {
      return undefined
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveEvent(null)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [activeEvent])

  const summaryText = useMemo(() => {
    const dominantDirection = state.north >= state.east ? '北向' : '东向'

    return `当前活跃范围稳定在 ${Math.round(state.radius - 35)}-${Math.round(
      state.radius + 35,
    )} 米区间，${dominantDirection}贡献更强，西向仍有边界衰减迹象。`
  }, [state.east, state.north, state.radius])

  return (
    <>
      <main className="screen-shell">
        <div className="mx-auto grid h-full max-w-[1800px] grid-cols-1 gap-4 overflow-hidden xl:grid-cols-[minmax(360px,35fr)_minmax(0,65fr)]">
          <aside className="flex min-h-0 flex-col gap-4">
            <section className="shrink-0 rounded-[22px] border border-slate-800/80 bg-slate-950/35 px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <div className="text-[12px] uppercase tracking-[0.22em] text-slate-400">
                DVS 远距轨迹 · RGB 落花确认 · 活跃范围融合判断
              </div>
              <h1 className="mt-2 text-[32px] font-extrabold leading-tight tracking-[0.02em] text-slate-50 2xl:text-[38px]">
                蜜蜂活跃范围监控大屏
              </h1>
            </section>

            <Panel title="当前判断" tag="DVS + RGB" className="shrink-0">
              <div className="rounded-[18px] border border-slate-700/80 bg-slate-900/55 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-400">融合半径</div>
                    <div className="mt-2 text-[38px] leading-none font-bold text-emerald-300">{Math.round(state.radius)} m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">现场时间</div>
                    <div className="mt-1 text-xl font-semibold text-slate-50">{clock.time}</div>
                    <div className="mt-1 text-[11px] text-slate-400">{clock.date}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{summaryText}</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/55 px-3 py-2.5">
                    <div className="text-[11px] text-slate-400">DVS</div>
                    <div className="mt-1 text-xl font-semibold text-slate-50">{state.dvs}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/55 px-3 py-2.5">
                    <div className="text-[11px] text-slate-400">RGB</div>
                    <div className="mt-1 text-xl font-semibold text-slate-50">{state.rgb.toFixed(1)}%</div>
                  </div>
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/55 px-3 py-2.5">
                    <div className="text-[11px] text-slate-400">置信度</div>
                    <div className="mt-1 text-xl font-semibold text-slate-50">{Math.round(state.confidence)}%</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid gap-2.5">
                {focusInsights.map((row) => (
                  <div
                    key={row.title}
                    className="grid grid-cols-[60px_1fr_auto] gap-2.5 rounded-2xl border border-slate-700/80 bg-slate-900/55 px-3 py-3"
                  >
                    <div className="pt-0.5 text-xs text-slate-400">{row.title}</div>
                    <div className="text-xs leading-6 text-slate-300">{row.content}</div>
                    <div
                      className={`self-start rounded-full border px-2 py-1 text-[11px] ${
                        row.tone === 'warn'
                          ? 'border-amber-200/20 bg-amber-200/10 text-amber-100'
                          : 'border-emerald-300/20 bg-emerald-300/10 text-emerald-50'
                      }`}
                    >
                      {row.badge}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="事件证据流" tag="证据链" className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-auto pr-1">
                <div className="grid gap-2.5">
                  {eventFeed.map((item) => (
                    <button
                      key={`${item.key}-${item.time}-${item.title}`}
                      type="button"
                      onClick={() => setActiveEvent(item.key)}
                      className="group grid grid-cols-[56px_1fr] gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-3 text-left transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                    >
                      <div className={`event-thumb event-thumb-${item.thumb} h-14 w-14`} />
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="text-[11px] text-slate-400">{item.time}</div>
                          <div
                            className={`rounded-full border px-2 py-1 text-[11px] ${
                              item.badgeTone === 'warn'
                                ? 'border-amber-200/20 bg-amber-200/10 text-amber-100'
                                : item.badgeTone === 'alert'
                                  ? 'border-rose-300/20 bg-rose-300/10 text-rose-100'
                                  : 'border-emerald-300/20 bg-emerald-300/10 text-emerald-50'
                            }`}
                          >
                            {item.badge}
                          </div>
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slate-50">{item.title}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-300">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Panel>
          </aside>

          <div className="min-h-0 overflow-hidden">
            <RadarPanel
              state={state}
              detailOpen={detailOpen}
              onToggleDetail={() => setDetailOpen((current) => !current)}
              onCloseDetail={() => setDetailOpen(false)}
              details={directionActivityDetails}
            />
          </div>
        </div>
      </main>

      <EventModal activeKey={activeEvent} onClose={() => setActiveEvent(null)} />
    </>
  )
}
