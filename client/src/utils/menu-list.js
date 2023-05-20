import {Treaty} from '@/api/treaty';
import {Case} from '@/api/case';


export const chiefMenuList = [
    {id: 1, title: 'Treaties', model: Treaty},
    {id: 2, title: 'Employees', model: 'Employer'},
    {id: 3, title: 'Cases', model: Case},
    {id: 4, title: 'Documents', model: 'Document'},
    {id: 5, title: 'Job titles', model: 'JobTitle'},
    {id: 6, title: 'Detectives lists', model: 'DetectivesList'},
    {id: 7, title: 'Clients', model: 'Client'},
    {id: 8, title: 'Files', model: 'File'},
]

export const seniorMenuList = [
    {id: 1, title: 'Cases', model: Case},
    {id: 2, title: 'Detectives lists', model: 'DetectivesList'},
    {id: 3, title: 'Employees', model: 'Employer'},
    {id: 4, title: 'Documents', model: 'Document'},
    {id: 5, title: 'Files', model: 'File'},
]