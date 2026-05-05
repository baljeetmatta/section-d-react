import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IProduct{
    title:string,
    description:string
}
interface IProductState{
    items:IProduct[],
    status:boolean
}
const ProductInitial:IProductState={
    items:[],
    status:false
}


// const fetchProducts=async()=>{

//      const response=await   fetch("https://dummyjson.com/products")
//      const result=await response.json();
//      return result.products;

// }
//API REquest aysnc request
export const fetchProducts=createAsyncThunk("product",async()=>{

     const response=await   fetch("https://dummyjson.com/products")
     const result=await response.json();
     return result.products;

});

const productSlice=createSlice({
    name:'product',
    initialState:ProductInitial,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<IProduct[]>)=>{

                state.items=action.payload;
                state.status=true

        })
        
    }
})

export default productSlice.reducer