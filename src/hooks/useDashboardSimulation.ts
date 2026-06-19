import { useEffect, useMemo, useState } from 'react'

import { eventPool, initialDashboardState, initialEventFeed } from '../data/mockDashboard'
import { createEventFeedItem, formatClock, tickDashboardState } from '../lib/dashboard'
import type { DashboardState, EventFeedItem } from '../types/dashboard'

export function useDashboardSimulation() {
  const [state, setState] = useState<DashboardState>(initialDashboardState)
  const [now, setNow] = useState(() => new Date())
  const [eventFeed, setEventFeed] = useState<EventFeedItem[]>(initialEventFeed)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState((current) => tickDashboardState(current))

      if (Math.random() > 0.45) {
        const nextPoolItem = eventPool[Math.floor(Math.random() * eventPool.length)]

        setEventFeed((current) => [createEventFeedItem(nextPoolItem, new Date()), ...current].slice(0, 4))
      }
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  const clock = useMemo(() => formatClock(now), [now])

  return {
    state,
    clock,
    eventFeed,
  }
}
