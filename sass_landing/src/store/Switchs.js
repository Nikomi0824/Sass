const Switchs = {
    state: {
        dark: false        
    },
    getters: {
       Get_Dark(state){
        return state.dark
       }
    },
    mutations:{
      SET_DARK_MODE(state) {
          state.dark =! state.dark
      }
    } 
}


export default Switchs