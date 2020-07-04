import React from 'react'

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
  dispatch: React.Dispatch<TActions>
}

export const AuthContext = React.createContext({} as TInitContext)
export const useAuth = () => React.useContext(AuthContext)

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
  const [state, dispatch] = React.useReducer(authReducer, { isAuthenticated: persistedState } as TAuthState)
  const { children } = props

  React.useEffect(() => {
    setPersistedState(state.isAuthenticated)
  }, [setPersistedState, state.isAuthenticated])

  const value = { state, dispatch }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
