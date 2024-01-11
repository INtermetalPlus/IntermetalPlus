import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '@/features/contactSlice'; 
import productReducer from '@/features/productSlice'; 

export const store = configureStore({
    reducer: {
        contact: contactSlice,
        products: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
