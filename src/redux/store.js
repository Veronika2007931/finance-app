import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/redux/authSlice';
import balanceReducer from '../../src/redux/balanceSlice';
import transactionsReducer from '../../src/redux/transactionsSlice';
import filtersReducer from '../../src/redux/filtersSlice';


export const store = configureStore({
    reducer: {
      auth: authReducer,
      balance: balanceReducer,
      transactions: transactionsReducer,
      filters: filtersReducer,
    },
});

export default store;