export const routes = [
    {id: 0, path: '/', title: 'Home', isDefault: true},
    {id: 1, path: '/', title: 'Home', userRoles: ['USER', 'CLIENT']},
    {
        id: 2,
        path: '/services',
        title: 'Services',
        subcategories: [
            {id: 1, path: '/services/search', title: 'Search', isDefault: true},
            {id: 2, path: '/services/investigation', title: 'Investigation', isDefault: true},
            {id: 3, path: '/services/observation', title: 'Observation', isDefault: true},
            {id: 4, path: '/services/adultery', title: 'Adultery', isDefault: true},
        ],
        userRoles: ['USER', 'CLIENT']
    },
    {id: 3, path: '/signin', title: 'Sign in', userRoles: ['USER']},
    {id: 4, path: '/profile', title: 'Profile', userRoles: ['CLIENT', 'CHIEF', 'SENIOR']},
    {id: 5, path: '/signup', title: 'Sign up', isDefault: true},
    {id: 6, path: '/message', title: 'Message', isDefault: true},
];