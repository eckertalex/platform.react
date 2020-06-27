import { useState, useEffect } from 'react'
/* -------------------------------------------------------------------------- */

export default function usePersistedState<T>(key: string, defaultState: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const cachedState = window.localStorage.getItem(key)
      if (!cachedState) {
        return defaultState
      }
      try {
        return JSON.parse(cachedState)
      } catch (err) {
        return defaultState
      }
    } catch (err) {
      return defaultState
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}
