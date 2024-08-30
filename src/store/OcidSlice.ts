import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ocid } from "../api/character/Ocid";

export const fetchOcid = createAsyncThunk(
    'ocid/fetchOcid',
    async (characterName : string) => {
        const result = await ocid(characterName);
        return result;
    }
);

const ocidSlice = createSlice({
    name: 'ocid', 
    initialState: {
        value: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOcid.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOcid.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value = action.payload;
            })
            .addCase(fetchOcid.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default ocidSlice;