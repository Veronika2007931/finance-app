export const getCategorySum = (data, currentCategory) => {
    let categorySum = 0

    data.map(({category, sum}) => {
        if (currentCategory === category) {
            categorySum += sum
        }
    })

    return categorySum
}