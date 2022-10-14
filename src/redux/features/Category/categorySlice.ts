import { CategoryI, ServerResponse } from "../../../types";
import { api } from "../api/api";


export const categorySlice=api.injectEndpoints({
    endpoints:(builder)=>({
        getAllCategories:builder.query<CategoryI[],void>({
            query:()=>'/category',
            transformResponse:(res:ServerResponse<CategoryI[]>)=>{
                const categories=res.data.map(el=>el)
                return categories
            },
            providesTags:(result)=>
            
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Category", id } as const)),
              { type: "Category", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Category', id: 'LIST' }` is invalidated
            [{ type: "Category", id: "LIST" }],
        }),
        createCategory:builder.mutation<CategoryI,Partial<CategoryI>>({
            query:(body)=>'/category',
            transformResponse:(res:ServerResponse<CategoryI>)=>{
                return res.data
            }
        })
    })
})

export const {useGetAllCategoriesQuery,useCreateCategoryMutation}=categorySlice