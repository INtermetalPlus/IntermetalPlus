import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
export interface ProductState {
    id: number;
    name: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    video: string;
    price: string;
    description: string;
    detail_description: string;
}

type OptionalProductInfo = Partial<ProductState>;

// Define the initial state using that type
const initialState: OptionalProductInfo[] = [];

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('http://146.190.140.32/api/v1/products/');
        return response.data as ProductState[];
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //  reducers here if necessary
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                // Handle loading state, if needed
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                // Handle error state
            });
    },
});

export default productSlice.reducer;
