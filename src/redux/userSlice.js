import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
    password: '', 
    spendings: [
      {date:"02.02.2010", desciption:"paracetamol", category:"meds", sum:2233},
      {date:"23.08.2021", desciption:"cheeze", category:"food", sum:45}
    ],
    incomes: [
      {date:"05.01.2024", desciption:"kolyadka", category:"beggary", sum:500},
      {date:"31.06.2047", desciption:"sallary", category:"job", sum:45000}
    ]},
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addSpendings: (state, action) => {
        state.user.spendings = state.user.spendings.push(action.payload)
    },
    addIncomes: (state, action) => {
        state.user.incomes = state.user.incomes.push(action.payload)
    }
  },
});

export const {addSpendings, addIncomes} = userSlice.actions;
export default userSlice.reducer;