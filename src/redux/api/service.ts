import { bugBusterProApi } from "./api";

const SERVICE_URL = "/service";

export const serviceApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createService: build.mutation({
            query: (serviceData) => ({
                url: `${SERVICE_URL}/create-service`,
                method: "POST",
                data: serviceData,
            }),
            invalidatesTags: ["service"]

        }),
        deleteService: build.mutation({
            query: (serviceId) => ({
                url: `${SERVICE_URL}/${serviceId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["service"]
        }),
        getAllService: build.query({
            query: () => ({
                url: `${SERVICE_URL}/`,
                method: "GET",
            }),
            providesTags: ["service"]
        }),
        getService: build.query({
            query: (serviceId) => ({
                url: `${SERVICE_URL}/${serviceId}`,
                method: "GET",
            })
        }),
        updateService: build.mutation({
            query: (updatedServiceInfo) => ({
                url: `${SERVICE_URL}/${updatedServiceInfo.id}`,
                method: "PATCH",
                data: { 'role': updatedServiceInfo.role }
            }),
            invalidatesTags: ["service"]
        }),
    }),

})

export const {
    useCreateServiceMutation,useDeleteServiceMutation,useGetAllServiceQuery,useGetServiceQuery,useUpdateServiceMutation
} = serviceApi