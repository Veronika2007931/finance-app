export const selectAuth = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectFilters = (state) => state.filters;
export const selectSpendings = (state) => state.finances.spendings;
export const selectIncomes = (state) => state.finances.incomes;
export const selectSpendingsCategories = (state) => state.financesCategories.spendingsCategories;
export const selectIncomesCategories = (state) => state.financesCategories.incomesCategories;
export const selectBalance = (state) => state.finances.incomes.reduce((acc, income) => acc + income.sum, 0) - state.finances.spendings.reduce((acc, spending) => acc + spending.sum, 0);
