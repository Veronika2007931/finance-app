export const getSplitedDate = (date) => { 
    const [day, month, year] = date.split('.');

    return `${month}.${year}`
}


export const getFinancesByPeriod = (filterDate, financeData) => {
    if (filterDate !== 'all-time') {
        const filteredFinanceDataByMonth =  financeData.filter((item) => {
            const itemDate = getSplitedDate(item.date)
            
            if (itemDate === filterDate) {
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
        const filteredFinanceDataByCategory = financeData.filter((item) => item.category === filterCategory)
        return filteredFinanceDataByCategory
    } else {
        return financeData
    }
}

export const getFilteredFinances = (filter, financeData) => {
    let filteredData = financeData
    for (let key of Object.keys(filter)) {
        if (key === 'category') {
            filteredData = getFinancesByCategory(filter.category, filteredData)
        } else if (key === 'dateRange') {
            filteredData = getFinancesByPeriod(filter.dateRange, filteredData)
        }
    }

    return filteredData
}