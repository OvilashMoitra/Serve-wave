import { bugBusterProApi } from "./api";

const BlogTag_URL = "/blogTag";

export const blogTagApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createBlogTag: build.mutation({
            query: (tagData) => ({
                url: `${BlogTag_URL}/create-tag`,
                method: "POST",
                data: tagData,
            }),
            invalidatesTags: ['blogTags']
        }),
        getAllBlogTags: build.query({
            query: () => ({
                url: `${BlogTag_URL}/`,
                method: "GET",
            }),
            providesTags: ["blogTags"]
        }),
        updateBlogTag: build.mutation({
            query: (payload) => ({
                url: `${BlogTag_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['blogTags']
        }),

    }),

})

export const {
    useCreateBlogTagMutation,useGetAllBlogTagsQuery,useUpdateBlogTagMutation,
} = blogTagApi;
