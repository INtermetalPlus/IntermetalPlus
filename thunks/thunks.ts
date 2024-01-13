import { Product } from "@/features/productSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk<Product[]>(
  "products/getProducts",
  async () => {
    const response = await axios.get('/api/products')
    const data = response.data;
    console.log(data)
    return data;
  }
);


export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: number) => {
    const response = await axios.get(`http://146.190.140.32/api/v1/products/${id}/`);
    const data = await response.data;
    return data;
  }
)