import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledEmployeesSelect} from './StyledEmployeesSelect';
import {Employee} from '@/api/employee';
import {isEmptyArr} from '@/utils/is-empty-arr';

const EmployeesSelect = ({employee, setEmployee, isEdit, setCurrentEmployeeError, status, completedAt}) => {
    const {t} = useTranslation()

    const [isLoading, setIsLoading] = useState(false);

    const isCompleted = !!completedAt;

    const [employees, setEmployees] = useState([]);

    const handleSelectEmployee = (e) => {
        const employeeInput = e.target.value
        let newCurrentEmployeeError = ''
        if (status === 'виконано' && employeeInput === '') {
            newCurrentEmployeeError = 'You cannot remove the responsible detective from a completed treaty'
        }
        if (employeeInput !== '') {
            const currentEmployee = employees.find(empl => empl.id === Number(employeeInput))
            setEmployee(currentEmployee);
        } else {
            setEmployee({})
        }
        setCurrentEmployeeError(newCurrentEmployeeError)
    };

    useEffect(() => {
        setIsLoading(true);
        Employee.getAll()
            .then(data => {
                setEmployees(data);
            })
            .catch(e => {
                console.error(e.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <StyledEmployeesSelect value={employee?.id || ''}
                               onChange={handleSelectEmployee}
                               disabled={!isEdit || isCompleted}
                               $isEdit={isEdit && !isCompleted}
        >
            <option value=''>
                {t('ProfilePage.ChiefProfile.Select')}
            </option>
            {isEmptyArr(employees) && employees.map((empl) => (
                <option value={empl.id}
                        key={empl.id}
                >
                    {empl.fullName}
                </option>
            ))}
        </StyledEmployeesSelect>
    );
};

export default EmployeesSelect;