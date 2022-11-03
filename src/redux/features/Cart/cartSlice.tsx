import { CartI, ServerResponse } from "../../../types";
import { api } from "../api/api";


export const cartSlice=api.injectEndpoints({
   endpoints:(builder)=>({
    getUsersCart:builder.query<ServerResponse<CartI>,void>({
        query:()=>'/cart',
        providesTags:["Cart"]
    }),
    addToCart:builder.mutation<ServerResponse<{}>,{id:string,amount:number,multiplier?:number}>({
        query:({id,amount,multiplier})=>({
        url:`/cart/add/${id}`,
        method:"POST",
        body:{amount,multiplier}
        }),
        invalidatesTags:["Cart"]
    })
   }) 
})

export const {useGetUsersCartQuery,useAddToCartMutation}=cartSlice