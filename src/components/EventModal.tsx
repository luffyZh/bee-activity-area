import { eventDetails } from '../data/mockDashboard'
import type { EventKey } from '../types/dashboard'

interface EventModalProps {
  activeKey: EventKey | null
  onClose: () => void
}

const dvsTracks = [
  'top-[34%] left-[18%] h-1 w-[220px] -rotate-[18deg] bg-gradient-to-r from-transparent to-emerald-300 shadow-[0_0_16px_rgba(83,245,170,0.35)]',
  'top-[48%] left-[38%] h-1 w-[170px] rotate-[11deg] bg-gradient-to-r from-transparent to-sky-300 shadow-[0_0_16px_rgba(122,203,255,0.35)]',
  'top-[60%] left-[24%] h-1 w-[190px] -rotate-[28deg] bg-gradient-to-r from-transparent to-emerald-300 shadow-[0_0_16px_rgba(83,245,170,0.35)]',
  'top-[28%] left-[56%] h-1 w-[120px] rotate-[24deg] bg-gradient-to-r from-transparent to-amber-200 shadow-[0_0_16px_rgba(255,216,118,0.35)]',
]

const rgbBlobs = [
  'top-[28%] left-[22%] h-[74px] w-[74px] bg-[radial-gradient(circle,rgba(255,216,118,.9),rgba(255,216,118,0))]',
  'top-[46%] left-[46%] h-[98px] w-[98px] bg-[radial-gradient(circle,rgba(83,245,170,.88),rgba(83,245,170,0))]',
  'top-[62%] left-[28%] h-[68px] w-[68px] bg-[radial-gradient(circle,rgba(122,203,255,.88),rgba(122,203,255,0))]',
  'top-[18%] left-[62%] h-[56px] w-[56px] bg-[radial-gradient(circle,rgba(255,216,118,.72),rgba(255,216,118,0))]',
]

export function EventModal({ activeKey, onClose }: EventModalProps) {
  if (!activeKey) {
    return null
  }

  const details = eventDetails[activeKey]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-6 backdrop-blur-md"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[calc(100vh-48px)] w-full max-w-[1120px] overflow-auto rounded-[24px] border border-sky-300/20 bg-[linear-gradient(180deg,rgba(12,28,37,.98),rgba(8,19,26,.98))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.48)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-lg text-slate-100 transition hover:border-emerald-300/40 hover:text-white"
          aria-label="关闭"
        >
          ×
        </button>

        <div className="pr-14">
          <div className="text-xs uppercase tracking-[0.12em] text-slate-400">{details.time}</div>
          <h3 id="event-modal-title" className="mt-2 text-2xl font-semibold text-slate-50">
            {details.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{details.desc}</p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[18px] border border-slate-700/80 bg-[linear-gradient(180deg,rgba(9,24,31,.16),rgba(9,24,31,.9)),linear-gradient(135deg,#0b1c24,#133242)] p-4 min-h-[300px]">
            <div className="relative z-10 text-xs uppercase tracking-[0.08em] text-emerald-100">DVS 事件图像</div>
            <div className="relative z-10 mt-1.5 max-w-[86%] text-xs leading-6 text-slate-400">
              显示高速小目标轨迹切片、方向和速度趋势，用于判断空间可达性。
            </div>
            <div className="glow-grid absolute inset-0 opacity-60" />
            {dvsTracks.map((track) => (
              <div key={track} className={`absolute rounded-full ${track}`} />
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-slate-700/80 bg-[linear-gradient(180deg,rgba(9,24,31,.16),rgba(9,24,31,.9)),linear-gradient(135deg,#0b1c24,#133242)] p-4 min-h-[300px]">
            <div className="relative z-10 text-xs uppercase tracking-[0.08em] text-emerald-100">RGB 行为图像</div>
            <div className="relative z-10 mt-1.5 max-w-[86%] text-xs leading-6 text-slate-400">
              展示落花停留与近场行为确认，用于判断“活跃”是否转化为“有效授粉”。
            </div>
            {rgbBlobs.map((blob) => (
              <div key={blob} className={`absolute rounded-full ${blob}`} />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {[
            ['方向', details.direction],
            ['距离层', details.range],
            ['DVS 轨迹', details.tracks],
            ['RGB 确认', details.pollination],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-700/80 bg-slate-900/55 px-3.5 py-3">
              <div className="text-xs text-slate-400">{label}</div>
              <div className="mt-1.5 text-[22px] font-semibold text-slate-50">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
