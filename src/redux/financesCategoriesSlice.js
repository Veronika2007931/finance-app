import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spendingsCategories: [
        {
            label: 'продукти',
            value: 'food',
            img: require(`../../imgs/flows-category-products.svg`)
        },
        {
            label: 'алкоголь',
            value: 'alcohol',
            img: require(`../../imgs/flows-category-alcohol.svg`)
        },
        {
            label: 'розваги',
            value: 'recreations',
            img: require(`../../imgs/flows-category-recreations.svg`)
        },
        {
            label: 'здоров’я',
            value: 'meds',
            img: require(`../../imgs/flows-category-meds.svg`)
        },
        {
            label: 'Транспорт',
            value: 'transport',
            img: require(`../../imgs/flows-category-transport.svg`)
        },
        {
            label: 'все для дому',
            value: 'home',
            img: require(`../../imgs/flows-category-home.svg`)
        },
        {
            label: 'техніка',
            value: 'technique',
            img: require(`../../imgs/flows-category-technique.svg`)
        },
        {
            label: 'комуналка, зв’язок',
            value: 'taxes',
            img: require(`../../imgs/flows-category-taxes.svg`)
        },
        {
            label: 'спорт, хобі',
            value: 'sport',
            img: require(`../../imgs/flows-category-sport.svg`)
        },
        {
            label: 'навчання',
            value: 'studying',
            img: require(`../../imgs/flows-category-studying.svg`)
        },
        {
            label: 'інше',
            value: 'other',
            img: require(`../../imgs/flows-category-other.svg`)
        },
    ],

    incomesCategories: [
        {
            label: 'ЗП',
            value: 'job',
            img: require(`../../imgs/flows-category-job.svg`)
        },
        {
            label: 'Дод. прибуток',
            value: 'beggary',
            img: require(`../../imgs/flows-category-beggary.svg`)
        }
    ]
}

const financesCategoriesSlice = createSlice({
    name: 'financesCategories',
    initialState,
});

export const financesCategoriesReducers =  financesCategoriesSlice.reducer;