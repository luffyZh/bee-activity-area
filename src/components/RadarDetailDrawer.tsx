import type { DirectionActivityDetail } from '../types/dashboard'

interface RadarDetailDrawerProps {
  details: DirectionActivityDetail[]
  open: boolean
  onClose: () => void
}

function layerToneClass(state: DirectionActivityDetail['layers'][number]['state']) {
  if (state === 'high') {
    return 'from-emerald-300 to-emerald-400 text-emerald-50'
  }

  if (state === 'mid') {
    return 'from-sky-300 to-cyan-300 text-slate-950'
  }

  return 'from-amber-200 to-amber-300 text-slate-950'
}

export function RadarDetailDrawer({ details, open, onClose }: RadarDetailDrawerProps) {
  return (
    <aside className="panel-shell flex h-full min-h-0 flex-col px-4 py-4 md:px-5 md:py-5" aria-hidden={!open}>
      <div className="mb-3 flex shrink-0 items-center justify-between gap-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">方向分层详情</div>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">活跃度距离层</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            收起
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto pr-1">
        <div className="grid gap-3">
          {details.map((item) => (
            <section key={item.direction} className="rounded-[18px] border border-slate-700/70 bg-slate-900/65 p-3.5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-slate-50">{item.direction}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">{item.summary}</div>
                </div>
              </div>

              <div className="mt-3 grid gap-2.5">
                {item.layers.map((layer) => (
                  <div key={`${item.direction}-${layer.range}`} className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs text-slate-300">{layer.range}</div>
                      <div className="text-sm font-semibold text-slate-50">{layer.value}</div>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${layerToneClass(layer.state)}`}
                        style={{ width: `${layer.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </aside>
  )
}
