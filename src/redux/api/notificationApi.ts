import { bugBusterProApi } from "./api";

const notification_url = "/notification";

export const faqApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({

        deleteNotification: build.mutation({
            query: (id) => ({
                url: `${notification_url}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['notification']
        }),
        getNotificationsbyUser: build.query({
            query: (id) => ({
                url: `${notification_url}/${id}`,
                method: "GET",
            }),
            providesTags: ["notification"]
        }),
        readNotifications: build.mutation({
            query: (payload) => ({
                url: `${notification_url}/${payload}`,
                method: "PATCH",
                data: { read: true },
            }),
            invalidatesTags: ['notification']
        }),

    }),

})

export const {
    useDeleteNotificationMutation, useGetNotificationsbyUserQuery, useReadNotificationsMutation
} = faqApi