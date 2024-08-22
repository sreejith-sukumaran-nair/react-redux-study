import {createSlice} from '@reduxjs/toolkit'

const initialState = [] ;

const cartSlice = createSlice({
  name : 'cart',
  initialState ,
  reducers: {
    add(state,action){
      console.log('Reducer received:', action.payload);
      state.push(action.payload)
    },
    remove(state,action){
      return state.filter((x) => x.id !== action.payload)
    }
  }
});

export const {add,remove} = cartSlice.actions; // sending the action functions
export default cartSlice.reducer ; //sending the state
