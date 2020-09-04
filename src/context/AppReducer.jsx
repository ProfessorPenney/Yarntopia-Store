export default (state, action) => {
   if (action.type === 'SWITCH_THEME') {
      return {
         ...state,
         theme: state.theme === 'light' ? 'dark' : 'light'
      }
   }
   return state
}
