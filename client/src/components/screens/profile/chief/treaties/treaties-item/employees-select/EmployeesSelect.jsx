import {useEffect, useState} from 'react';

import {StyledEmployeesSelect} from './StyledEmployeesSelect';
import {Employee} from '@/api/employee';
import {isEmptyArr} from '@/utils/is-empty-arr';

const EmployeesSelect = ({employee, setEmployee, isEdit, setCurrentEmployeeError, status}) => {
    const [isLoading, setIsLoading] = useState(false);

    const [employees, setEmployees] = useState([]);

    const handleSelectEmployee = (e) => {
        const employeeInput = e.target.value
        let newCurrentEmployeeError = ''
        if (status === 'виконано' && employeeInput === '') {
            newCurrentEmployeeError = 'Нельзя убрать ответственного детектива из завершенного договора'
        }
        if (employeeInput !== '') {
            const currentEmployee = employees.find(empl => empl.id === Number(employeeInput))
            setEmployee(currentEmployee);
        } else {
            setCurrentEmployeeError(newCurrentEmployeeError)
            setEmployee({})
        }
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
                               disabled={!isEdit}
                               $isEdit={isEdit}
        >
            <option value=''>Выберите</option>
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