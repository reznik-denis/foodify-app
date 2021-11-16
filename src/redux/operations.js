import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDish } from 'service'

export const random = createAsyncThunk(
    'app/random',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchDish.random()
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    },
);