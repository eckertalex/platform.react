import React, { createContext, Dispatch, useContext, useReducer, useEffect } from 'react'

import usePersistedState from 'hooks/use-persisted-state'
/* -------------------------------------------------------------------------- */

type TActions = {
  type: 'signIn' | 'signOut'
}

type TAuthState = {
  isAuthenticated: boolean
}

type TInitContext = {
  state: TAuthState
  dispatch: Dispatch<TActions>
}

export const AuthContext = createContext({} as TInitContext)
export const useAuth = () => useContext(AuthContext)

function authReducer(state: TAuthState, action: TActions): TAuthState {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isAuthenticated: true,
      }
    case 'signOut':
      return {
        ...state,
        isAuthenticated: false,
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider(props: AuthProviderProps) {
  const [persistedState, setPersistedState] = usePersistedState('isAuthenticated', false)
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: persistedState } as TAuthState)
  const { children } = props

  useEffect(() => {
    setPersistedState(state.isAuthenticated)
  }, [setPersistedState, state.isAuthenticated])

  const value = { state, dispatch }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
