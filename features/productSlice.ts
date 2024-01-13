import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getProducts } from '@/thunks/thunks';

export interface Product {
    id?: number;
    name?: string;
    images1?: string;
    images2?: string;
    images3?: string;
    images4?: string;
    video?: string;
    price?: string;
    description?: string;
    characteristic?: string;
}

export interface ProductState {
    products: Product[] | null;
    isLoading: boolean;
    isError: boolean;
}


// Define the initial state using that type
const initialState: ProductState = {
    products:null,
    isLoading:false,
    isError:false
}

export const productSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }
})



export default productSlice.reducer