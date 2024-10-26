import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spendings: [
    {date:"02.02.2010", desciption:"paracetamol", category:"meds", sum:2233},
    {date:"23.08.2021", desciption:"cheeze", category:"food", sum:45}
  ],
  incomes: [
    {date:"05.01.2024", desciption:"kolyadka", category:"beggary", sum:500},
    {date:"31.06.2047", desciption:"sallary", category:"job", sum:45000}
  ]
}

const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    addSpendings: (state, action) => {
        state.spendings = state.spendings.push(action.payload)
    },
    addIncomes: (state, action) => {
        state.incomes = state.incomes.push(action.payload)
    }
  },
});

export const {addSpendings, addIncomes} = financesSlice.actions;
export const financesReducers =  financesSlice.reducer;