import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../redux/app/store"
import {cartSlice  } from "../../../redux/features/Cart/cartSlice"

type CartCountState={
    count: number;
}

const slice = createSlice({
    name:'cartCount',
    initialState:{count:0} as CartCountState,
    reducers:{
        updateCount:(state,{payload})=>{
            state.count =payload
        }
    },
    extraReducers:(builder)=>{
        builder.addMatcher(
           cartSlice.endpoints.getUsersCart.matchFulfilled,
           (state,payload)=>{
            state.count=payload.payload.data.singleOrders.length
           }
        )
        builder.addMatcher(
            cartSlice.endpoints.addToCart.matchFulfilled,
            (state,payload)=>{
                state.count= state.count +1
            }
        )
    }
})
export default slice.reducer
export  const {updateCount}= slice.actions
export const selectCountState=(state:RootState)=>state.cartCount.count