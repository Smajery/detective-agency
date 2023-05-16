export const routes = [
    {id: 0, path: '/treaty', title: 'Treatie', userRoles: ['CLIENT']},
    {id: 1, path: '/detectives', title: 'Detectives', userRoles: ['SENIOR']},
    {
        id: 2,
        path: '/services',
        title: 'Services',
        subcategories: [
            {id: 1, anchor: 'search', title: 'Search'},
            {id: 2, anchor: 'investigation', title: 'Investigation'},
            {id: 3, anchor: 'observation', title: 'Observation'},
            {id: 4, anchor: 'adultery', title: 'Adultery'},
        ],
        userRoles: ['USER', 'CLIENT']
    },
    {id: 3, path: '/help', title: 'Help', userRoles: ['USER', 'CLIENT']},
    {id: 4, path: '/feedbacks', title: 'Feedbacks', userRoles: ['USER', 'CLIENT']},
    {id: 5, path: '/contacts', title: 'Contacts', userRoles: ['USER', 'CLIENT']},
    {id: 6, path: '/signin', title: 'Sign in', userRoles: ['USER']},
    {id: 7, path: '/', title: 'Home', isDefault: true},
    {id: 8, path: '/profile', title: 'Profile', userRoles: ['CLIENT', 'CHIEF']},
    {id: 9, path: '/signup', title: 'Sign up', isDefault: true},
    {id: 10, path: '/message', title: 'Message', isDefault:true},
];