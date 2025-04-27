import { bugBusterProApi } from "./api";

const Cart_URL = "/cart";

export const cartApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createCart: build.mutation({
            query: (cartData) => ({
                url: `${Cart_URL}/create-cart`,
                method: "POST",
                data: cartData,
            }),
            invalidatesTags: ['cart']
        }),
        deleteCart: build.mutation({
            query: (id) => ({
                url: `${Cart_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['cart']
        }),
        getAllCarts: build.query({
            query: () => ({
                url: `${Cart_URL}/`,
                method: "GET",
            }),
            providesTags: ["cart"]
        }),
        getUserCarts: build.query({
            query: (id) => ({
                url: `${Cart_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["cart"]
        }),
        updateCart: build.mutation({
            query: (payload) => ({
                url: `${Cart_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['cart']
        }),
    }),
})

export const {
    useCreateCartMutation,useDeleteCartMutation,useGetAllCartsQuery,useUpdateCartMutation,useGetUserCartsQuery
} = cartApi;
