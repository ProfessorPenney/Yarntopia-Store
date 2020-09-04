import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
   theme: 'light'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   function switchTheme(theme) {
      dispatch({
         type: 'SWITCH_THEME'
         // payload: theme
      })
   }

   return (
      <GlobalContext.Provider
         value={{
            theme: state.theme,
            switchTheme
         }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalContext
