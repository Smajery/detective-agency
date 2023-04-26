export const routes = [
    {id: 1, path: '/detectives', title: 'Детективи'},
    {
        id: 2,
        path: '/services',
        title: 'Послуги',
        subcategories: [
            {id: 1, anchor: 'search', title: 'Пошук'},
            {id: 2, anchor: 'investigation', title: 'Розслідування'},
            {id: 3, anchor: 'observation', title: 'Спостереження'},
            {id: 4, anchor: 'adultery', title: 'Подружня зрада'},
        ]
    },
    {id: 3, path: '/help', title: 'Допомога'},
    {id: 4, path: '/feedbacks', title: 'Відгуки'},
    {id: 5, path: '/contacts', title: 'Контакти'},
    {id: 6, path: '/signin', title: 'Вхід'},
];