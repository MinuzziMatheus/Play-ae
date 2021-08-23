const initialValue = [];

export default function favoriteListreducer(state = initialValue, action){
   if(action.type === 'ADD'){
      return [...state, action.song];
   }
   if(action.type === 'REMOVE'){
      return state.filter(item => item.id !== action.song);
   }

   return state;
};
