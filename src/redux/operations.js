import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDish } from 'service'
import ImageNotFound from 'static/image/not_found.jpg'

export const random = createAsyncThunk(
    'app/random',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchDish.random();
            const state = {
                id: data.idMeal,
                title: data.strMeal,
                description: data.strInstructions,
                image: data.strMealThumb ? data.strMealThumb : ImageNotFound,
            }
            return state;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    },
);