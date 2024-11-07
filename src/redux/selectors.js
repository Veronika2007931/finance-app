export const selectAuth = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectFilters = (state) => state.filters;
export const selectSpendings = (state) => state.finances.spendings;
export const selectIncomes = (state) => state.finances.incomes;
export const selectSpendingsCategories = (state) => state.financesCategories.spendingsCategories;
export const selectIncomesCategories = (state) => state.financesCategories.incomesCategories;