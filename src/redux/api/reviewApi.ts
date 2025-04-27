import { bugBusterProApi } from "./api";

const Review_URL = "/review";

export const reviewApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createReview: build.mutation({
            query: (reviewData) => ({
                url: `${Review_URL}/create-review`,
                method: "POST",
                data: reviewData,
            }),
            invalidatesTags: ['review']
        }),
        deleteReview: build.mutation({
            query: (id) => ({
                url: `${Review_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['review']
        }),
        // getAllReviews: build.query({
        //     query: () => ({
        //         url: `${Review_URL}/`,
        //         method: "GET",
        //     }),
        //     providesTags: ["review"]
        // }),
        getReviewById: build.query({
            query: (id) => ({
                url: `${Review_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["review"]
        }),
        updateReview: build.mutation({
            query: (payload) => ({
                url: `${Review_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['review']
        }),
    }),
});

export const {
    useCreateReviewMutation,useDeleteReviewMutation,useGetReviewByIdQuery,useUpdateReviewMutation
} = reviewApi;
