import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spendings: [
    {id: '1', date:"2010-02-02", description:"paracetamol", category:"meds", sum:2233},
    {id: '2', date:"2021-08-23", description:"cheeze", category:"food", sum:45}
  ],
  incomes: [
    {id: '3' ,date:"2024-01-05", description:"kolyadka", category:"beggary", sum:500},
    {id: '4', date:"2047-06-31", description:"sallary", category:"job", sum:45000}
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
      state.spendings = state.spendings.filter(item => item.id !== action.payload)
    },
    deleteIncomes: (state, action) => {
      state.incomes = state.incomes.filter(item => item.id !== action.payload)
    }

  },
});

export const {addSpendings, addIncomes, deleteIncomes, deleteSpendings} = financesSlice.actions;
export const financesReducers =  financesSlice.reducer;