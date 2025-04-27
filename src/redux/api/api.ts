import { axiosBaseQuery } from '@/lib/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'



const baseUrl = " http://localhost:1022/api/v1"

// Define a service using a base URL and expected endpoints
export const bugBusterProApi = createApi({
    reducerPath: 'bugBusterProApi',
    baseQuery: axiosBaseQuery({ baseUrl }),
    endpoints: (build) => ({

    }),
    tagTypes: ['faq', 'role', "service", "stats", "blog", "cart", "contact", "order", "review", 'user', "blogTags","auth"]
})