import { bugBusterProApi } from "./api";

const AUTH_URL = "/auth";

export const authApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                data: loginData,
            }),

        }),
        userSignUp: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                data: loginData
            })
        }),
        getUser: build.query({
            query: (id) => ({
                url: `${AUTH_URL}/${id}`,
                method: "GET",
            })
        }),
        getAllUser: build.query({
            query: () => ({
                url: `${AUTH_URL}/`,
                method: "GET",
            }),
            providesTags:["auth"]
        }),
        updateUser: build.mutation({
            query: (updatedInfo) => ({
                url: `${AUTH_URL}/${updatedInfo.id}`,
                method: "PATCH",
                data: { 'role': updatedInfo.role }
            })
        }),
    }),

})

export const {
    useUserLoginMutation,
    useUserSignUpMutation, useGetAllUserQuery,
    useUpdateUserMutation, useGetUserQuery
} = authApi