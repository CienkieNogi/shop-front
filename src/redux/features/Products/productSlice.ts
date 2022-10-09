import { createEntityAdapter, createSelector, createSlice, EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { InputProductI, ProductI, ServerResponse } from "../../../types";
import { apiSlice } from "../api/api";

const productsAdapter = createEntityAdapter<ProductI>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
  selectId: (item) => item.id,
});

const initialState = productsAdapter.getInitialState();
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductI[],void>({
      query: () => "/product",
      transformResponse:(res:ServerResponse<ProductI[]>)=>{
       const products = res.data.map(prod=>prod)
       return products
      },
    //   providesTags:(result,error,arg)=>[
    //     {type:'Product',id:'LIST'},
       
    //   ]
    providesTags: (result) =>
    // is result available?
    result
      ? // successful query
        [
          ...result.map(({ id }) => ({ type: 'Product', id } as const)),
          { type: 'Product', id: 'LIST' },
        ]
      : // an error occurred, but we still want to refetch this query when `{ type: 'Product', id: 'LIST' }` is invalidated
        [{ type: 'Product', id: 'LIST' }],
// }),
     
    }),
    getProductById:builder.query<ProductI,string>({
        query:(id)=>({
            url:`/product/${id}`
        }),
        //@ts-ignore
        transformResponse:(res:ServerResponse<ProductI>)=>{
            return productsAdapter.setOne(initialState,res.data)
            // return res.data
        }
    }),
    getProductByName:builder.mutation<ProductI,string>({
        query:(name)=>({
            url:`/product/name/search/1?name=${name}`,
            method:'GET'

        })
    }),
    createProduct:builder.mutation<ServerResponse<ProductI>,InputProductI>({
        query:(body)=>({
            url:`/product`,
            method:'POST',
            body
        }),
        invalidatesTags:[
            {type:'Product',id:"LIST"}
        ]
    }),
    deleteProduct:builder.mutation<ServerResponse<{}>,Partial<ProductI>>({
        query:({id})=>({
        
            url:`/product/${id}`,
            method:'DELETE',
            body:{id}
        }),
       
        invalidatesTags:(result,error,arg)=>[
            
            {type:'Product',id:arg.id}
        ]
    })
  }),
});
export const { useGetProductsQuery,useGetProductByIdQuery,useGetProductByNameMutation ,useCreateProductMutation,useDeleteProductMutation} = extendedApiSlice;

