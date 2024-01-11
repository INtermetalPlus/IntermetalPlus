import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductState } from '@/features/productSlice';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('http://146.190.140.32/api/v1/products/');
        return response.data as ProductState[];
    }
);
