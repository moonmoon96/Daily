import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { basic } from "../api/character/Basic";

export const fetchBasicData = createAsyncThunk(
    'basic/fetchBasicData',
    async (ocid: string) => {
        const result = await basic(ocid);
        return result;
    }
);

const basicSlice = createSlice({
    name: 'basic',
    initialState: {
        data: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasicData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBasicData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBasicData.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default basicSlice;