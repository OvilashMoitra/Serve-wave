import { bugBusterProApi } from "./api";

const Order_URL = "/orders";

export const orderApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation({
            query: (orderData) => ({
                url: `${Order_URL}/create-order`,
                method: "POST",
                data: orderData,
            }),
            invalidatesTags: ['order']
        }),
        deleteOrder: build.mutation({
            query: (id) => ({
                url: `${Order_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['order']
        }),
        getAllOrders: build.query({
            query: () => ({
                url: `${Order_URL}/`,
                method: "GET",
            }),
            providesTags: ["order"]
        }),
        getUserOrders: build.query({
            query: (id) => ({
                url: `${Order_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["order"]
        }),
        updateOrder: build.mutation({
            query: (payload) => ({
                url: `${Order_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['order']
        }),
    }),
})

export const {
    useCreateOrderMutation,useDeleteOrderMutation,useGetAllOrdersQuery,useUpdateOrderMutation, useGetUserOrdersQuery
} = orderApi;
