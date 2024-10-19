import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/redux/authSlice';
import userSlice from '../../src/redux/userSlice';
import filtersReducer from '../../src/redux/filtersSlice';


export const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userSlice,
      filters: filtersReducer,
    },
});

export default store;