import {createSlice} from '@reduxjs/toolkit';



const initialState = {
  data: [],
} ;

const productSlice = createSlice({
  name : 'products' ,
  initialState ,
  reducers : {
    fetchProducts(state,action){
      state.data = action.payload
    }
  }
})


export function getProducts(){
  return async function getproductsThunk(dispatch,getState){
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      dispatch(fetchProducts(result));
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }
}

export const {fetchProducts} = productSlice.actions; // sending the action functions
export default productSlice.reducer ; //sending the state
