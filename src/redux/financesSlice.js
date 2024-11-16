import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spendings: [
    {id: '1', date:"02-02-2010", description:"paracetamol", category:"meds", sum:2233},
    {id: '2', date:"23-08-2021", description:"cheeze", category:"food", sum:45}
  ],
  incomes: [
    {id: '3' ,date:"05-01-2024", description:"kolyadka", category:"beggary", sum:500},
    {id: '4', date:"31-06-2047", description:"sallary", category:"job", sum:45000}
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
    
    },
    deleteSpendings: (state, action) => {
      state.spendings = state.spendings.filter(item => item.id !== action.payload)
    },
    deleteIncomes: (state, action) => {
      state.incomes = state.incomes.filter(item => item.id !== action.payload)
    }

  },
);

export const {addSpendings, addIncomes, deleteIncomes, deleteSpendings} = financesSlice.actions;
export const financesReducers =  financesSlice.reducer;