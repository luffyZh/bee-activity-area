import type { PropsWithChildren, ReactNode } from 'react'

interface PanelProps extends PropsWithChildren {
  title: string
  tag?: string
  actions?: ReactNode
  className?: string
}

export function Panel({ title, tag, actions, className = '', children }: PanelProps) {
  return (
    <section className={`panel-shell ${className}`.trim()}>
      <div className="relative z-10 mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold tracking-[0.02em] text-slate-50">{title}</h2>
        {actions ?? (tag ? <span className="status-tag">{tag}</span> : null)}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}
