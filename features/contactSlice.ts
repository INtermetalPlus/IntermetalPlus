import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
export interface ContactState {
    id: number;
    phone_number: string;
    email: string;
    whatsapp_number: string;
}

type OptionalContactInfo = Partial<ContactState>

// Define the initial state using that type
const initialState: OptionalContactInfo = {

}

export const contactSlice = createSlice({
    name: 'contact',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers:{}
})




export default contactSlice.reducer