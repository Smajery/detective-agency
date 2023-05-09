export const routes = [
    {id: 1, path: '/detectives', title: 'Detectives'},
    {
        id: 2,
        path: '/api',
        title: 'Services',
        subcategories: [
            {id: 1, anchor: 'search', title: 'Search'},
            {id: 2, anchor: 'investigation', title: 'Investigation'},
            {id: 3, anchor: 'observation', title: 'Observation'},
            {id: 4, anchor: 'adultery', title: 'Adultery'},
        ]
    },
    {id: 3, path: '/help', title: 'Help'},
    {id: 4, path: '/feedbacks', title: 'Feedbacks'},
    {id: 5, path: '/contacts', title: 'Contacts'},
];