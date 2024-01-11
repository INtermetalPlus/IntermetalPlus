import contactSlice from '@/features/contactSlice'
import productSlice from '@/features/productSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        contact:contactSlice,
        products:productSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch