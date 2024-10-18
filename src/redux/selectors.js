export const selectAuth = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectBalance = (state) => state.balance;
export const selectTransactions = (state) => state.transactions.transactions;
export const selectFilters = (state) => state.filters;