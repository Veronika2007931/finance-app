export const addIncomes = (balance, incomes) => {
    incomes.map(({sum}) => {
        balance += sum
    })

    return balance
}

export const subtractSpendings = (balance, spendings) => {
    spendings.map(({sum}) => {
        balance -= sum
    })

    return balance
}

export const getBalance = (incomes, spendings) => {
    let balance = 0

    balance = addIncomes(balance, incomes)
    balance = subtractSpendings(balance, spendings)
    
    return balance
}