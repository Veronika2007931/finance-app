import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spendings: [
    {date:"02.10.2024", desciption:"paracetamol", category:"meds", sum:2233},
    {date:"23.09.2024", desciption:"cheeze", category:"food", sum:45}
  ],
  incomes: [
    {date:"05.10.2024", desciption:"kolyadka", category:"beggary", sum:500},
    {date:"31.11.2024", desciption:"sallary", category:"job", sum:45000}
  ]
}

const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    addSpendings: (state, action) => {
      state.spendings.push(action.payload)
    },
    addIncomes: (state, action) => {
      state.incomes.push(action.payload)
    },
    deleteSpendings: (state, action) => {
      state.spendings.filter(item => item.id === action.payload)
    },
    deleteIncomes: (state, action) => {
      state.incomes.filter(item => item.id === action.payload)
    }
  },
});

export const {addSpendings, addIncomes, deleteSpendings, deleteIncomes} = financesSlice.actions;
export const financesReducers =  financesSlice.reducer;