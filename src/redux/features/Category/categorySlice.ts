import { CategoryI, ServerResponse } from "../../../types";
import { api } from "../api/api";

export const categorySlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoryI[], void>({
      query: () => "/category",
      transformResponse: (res: ServerResponse<CategoryI[]>) => {
        const categories = res.data.map((el) => el);
        return categories;
      },
      providesTags: (result) =>
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Category", id } as const)),
              { type: "Category", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Category', id: 'LIST' }` is invalidated
            [{ type: "Category", id: "LIST" }],
    }),
    createCategory: builder.mutation<CategoryI, Partial<CategoryI>>({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body,
      }),

      transformResponse: (res: ServerResponse<CategoryI>) => {
        return res.data;
      },
      invalidatesTags: [{ type: "Category", id: "LIST" }],
      // invalidatesTags:['Category']
    }),
    getCategoryById: builder.query<CategoryI, string>({
      query: (id) => ({
        url: `category/${id}`,
      }),
      transformResponse: (res: ServerResponse<CategoryI>) => {
        return res.data;
      },
    }),
    editCategory: builder.mutation<void, Partial<CategoryI>>({
      query: (body) => ({
        url: `category/${body.id}`,
        method: "PATCH",
        body: { newTitle: body.title },
      }),
      //optimistic update
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        console.log('OPTIMISTIC',id,patch);
        const patchResult = dispatch(
          categorySlice.util.updateQueryData(
            "getCategoryById",
            id!,
            (draft) => {
              console.log('INSIDE',draft);
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteCategory:builder.mutation<ServerResponse<{}>,Partial<CategoryI>>({
      query:({id})=>({
        url: `category/${id}`,
        method:'DELETE',
        body:id
      }),
      invalidatesTags:['Category']
    })
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useGetCategoryByIdQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;
