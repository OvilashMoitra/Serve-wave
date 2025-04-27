import { bugBusterProApi } from "./api";

const Role_URL = "/role";

export const roleApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({

        getAllRole: build.query({
            query: () => ({
                url: `${Role_URL}/`,
                method: "GET",
            }),
            providesTags: ["role"]
        }),
        updateRole: build.mutation({
            query: (payload) => ({
                url: `${Role_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.role,
            }),
            invalidatesTags: ['role']
        }),

    }),

})

export const {
    useGetAllRoleQuery,
    useUpdateRoleMutation,
} = roleApi