import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
    password: '', 
    spendings: [
      {date:"02.02.2010", description:"paracetamol", category:"meds", sum:2233},
      {date:"23.08.2021", description:"cheeze", category:"food", sum:45}
    ],
    incomes: [
      {date:"05.01.2024", description:"kolyadka", category:"beggary", sum:500},
      {date:"31.06.2047", description:"sallary", category:"job", sum:45000}
    ]},
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addSpendings: (state, action) => {
        state.user.spendings.push(action.payload)
    },
    addIncomes: (state, action) => {
        state.user.incomes.push(action.payload)
    }
  },
});

export const {addSpendings, addIncomes} = userSlice.actions;
export default userSlice.reducer;