import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 0,
    income: 0,
    expense: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action) => state.balance = action.payload,
    addIncome: (state, action) => state.income = state.income + action.payload,
    addExpense: (state, action) => state.expense = state.expense - action.payload,
  },
});

export const { setBalance, addIncome, addExpense } = balanceSlice.actions;
export default balanceSlice.reducer;