import { bugBusterProApi } from "./api";

const Blog_URL = "/blog";

export const blogApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createBlog: build.mutation({
            query: (blogData) => ({
                url: `${Blog_URL}/create-blog`,
                method: "POST",
                data: blogData,
            }),
            invalidatesTags: ['blog']
        }),
        deleteBlog: build.mutation({
            query: (id) => ({
                url: `${Blog_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['blog']
        }),
        getAllBlog: build.query({
            query: (query) => ({
                url: `${Blog_URL}${query}`,
                method: "GET",
            }),
            providesTags: ["blog"]
        }),
        getBlogById: build.query({
            query: (id) => ({
                url: `${Blog_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["blog"]
        }),
        updateBlog: build.mutation({
            query: (payload) => ({
                url: `${Blog_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['blog']
        }),

    }),

})

export const {
    useCreateBlogMutation, useDeleteBlogMutation,useGetAllBlogQuery,useUpdateBlogMutation,useGetBlogByIdQuery
} = blogApi