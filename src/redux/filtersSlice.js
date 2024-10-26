import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
  dateRange: 'all-time',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
  },
});

export const { setCategory, setDateRange } = filtersSlice.actions;
export const filtersReducers = filtersSlice.reducer;