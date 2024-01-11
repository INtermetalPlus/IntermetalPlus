import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

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

type OptionalProdcutInfo = Partial<ProductState>

// Define the initial state using that type
const initialState: OptionalProdcutInfo = {

}

export const productSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers:{}
})



export default productSlice.reducer