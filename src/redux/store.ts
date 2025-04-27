import { configureStore } from '@reduxjs/toolkit'
import { bugBusterProApi } from './api/api'
// ...

export const store = configureStore({
    reducer: {
        [bugBusterProApi.reducerPath]: bugBusterProApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bugBusterProApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch