import { bugBusterProApi } from "./api";

const Contact_URL = "/contact";

export const contactApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createContact: build.mutation({
            query: (contactData) => ({
                url: `${Contact_URL}/create-contact`,
                method: "POST",
                data: contactData,
            }),
            invalidatesTags: ['contact']
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `${Contact_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['contact']
        }),
        getAllContacts: build.query({
            query: () => ({
                url: `${Contact_URL}/`,
                method: "GET",
            }),
            providesTags: ["contact"]
        }),
        getContactById: build.query({
            query: (id) => ({
                url: `${Contact_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["contact"]
        }),
        updateContact: build.mutation({
            query: (payload) => ({
                url: `${Contact_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.contact,
            }),
            invalidatesTags: ['contact']
        }),

    }),
});

export const {
    useCreateContactMutation, useDeleteContactMutation,useGetAllContactsQuery,useUpdateContactMutation,useGetContactByIdQuery
} = contactApi;
