export const getMonth = (filter) => {
    const parts = filter.split('.');
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);  // Rearrange to 'YYYY-MM-DD' format
    const month = date.getMonth() + 1;
    return month
}

export const getFinancesByPeriod = (filterDate, financeData) => {
    if (filterDate !== 'all-time') {
        const month = getMonth(filterDate)
        const filteredFinanceDataByMonth =  financeData.map((item) => {
            const itemMonth = getMonth(item.date)
            if (itemMonth === month) {
                return item
            }
        })
        return filteredFinanceDataByMonth
    } else {
        return financeData
    }
}

export const getFinancesByCategory = (filterCategory, financeData) => {
    if (filterCategory !== 'all') {
        const filteredFinanceDataByCategory =  financeData.map((item) => {
            if (item.category === filterCategory) {
                return item
            }
        })
        return filteredFinanceDataByCategory
    } else {
        return filterCategory
    }
}

export const getFilteredFinances = (filter, financeData) => {
    let filteredData
    for (let key of Object.keys(filter)) {
        if (key === 'category') {
            filteredData = getFinancesByCategory(financeData)
        } else if (key === 'dateRange') {
            filteredData = getFinancesByPeriod(financeData)
        }
    }

    return filteredData
}