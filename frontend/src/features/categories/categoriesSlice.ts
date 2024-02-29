import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CategoriesState from './types/State';
import * as api from './api';

const initialState: CategoriesState = {
    categories: [],
};

export const loadCategories = createAsyncThunk(
    'categories/loadCategories',
    async () => {
        const categories = await api.loadCategories();
        return categories;
    }
);


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadCategories.fulfilled, (state, action) => {
            const categories = action.payload;
            state.categories = categories;
        })
        .addCase(loadCategories.rejected, (state, action) => {
            state.loadError = action.error.message;
          })
    },
});

export default categoriesSlice.reducer;