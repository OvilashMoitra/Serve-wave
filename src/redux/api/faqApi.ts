import { bugBusterProApi } from "./api";

const FAQ_URL = "/faq";

export const faqApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createFAQ: build.mutation({
            query: (faqData) => ({
                url: `${FAQ_URL}/create-faq`,
                method: "POST",
                data: faqData,
            }),
            // console.log(faqData);
            invalidatesTags: ['faq']
        }),
        deleteFAQ: build.mutation({
            query: (id) => ({
                url: `${FAQ_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['faq']
        }),
        getAllFAQ: build.query({
            query: () => ({
                url: `${FAQ_URL}/`,
                method: "GET",
            }),
            providesTags: ["faq"]
        }),
        updateFAQ: build.mutation({
            query: (payload) => ({
                url: `${FAQ_URL}/${payload.id}`,
                method: "PUT",
                data: payload.data,
            }),
            invalidatesTags: ['faq']
        }),

    }),

})

export const {
    useCreateFAQMutation,
    useDeleteFAQMutation,
    useGetAllFAQQuery,
    useUpdateFAQMutation
} = faqApi