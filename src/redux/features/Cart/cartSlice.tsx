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
    }),
   removeSingleOrder:builder.mutation<ServerResponse<{}>,{id:string,singleOrderId:string}>({
        query:({id,singleOrderId})=>({
            url:`/cart/removeOne/${id}/${singleOrderId}`,
            method:"DELETE",
            
        }),
        invalidatesTags:["Cart"]
   }),
   removeAllItemsFromCart:builder.mutation<ServerResponse<{}>,{id:string}>({
    query:({id})=>({
        url:`/cart/all`,
        method:"DELETE",
        body:({id})
    }),
    invalidatesTags:["Cart"]
   }) 
   })
})

export const {useGetUsersCartQuery,useAddToCartMutation,useRemoveSingleOrderMutation,useRemoveAllItemsFromCartMutation}=cartSlice