const initialState = {
      main:{
         songArr : []
      }
}

export const mainReducer = (state = initialState , action) =>{

      switch(action.type){
            case "PLAY":
               return {
                 ...state,
                 main: {
                   ...state.main,
                   songArr: [...state.main.songArr, action.payload]
                 }
            }
            default:
                  return state;
      };
   
};
