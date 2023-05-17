import {useEffect, useState} from 'react';

import {StyledEmployeesSelect} from './StyledEmployeesSelect';
import {Employee} from '@/api/employee';
import {isEmptyArr} from '@/utils/is-empty-arr';

const EmployeesSelect = ({employee, setEmployee, isEdit}) => {
    const [isLoading, setIsLoading] = useState(false);

    const [employees, setEmployees] = useState([]);

    const handleSelectEmployee = (e) => {
        setEmployee(e.target.value);
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
        <StyledEmployeesSelect value={employee}
                               onChange={handleSelectEmployee}
                               disabled={!isEdit}
                               $isEdit={isEdit}
        >
            <option value=''>Выберите</option>
            {isEmptyArr(employees) && employees.map((employee) => (
                <option value={employee.fullName}
                        key={employee.id}
                >
                    {employee.fullName}
                </option>
            ))}
        </StyledEmployeesSelect>
    );
};

export default EmployeesSelect;