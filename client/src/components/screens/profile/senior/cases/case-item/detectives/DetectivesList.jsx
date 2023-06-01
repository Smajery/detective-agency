import {isEmptyArr} from '@/utils/is-empty-arr';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';


import {StyledDetectivesList} from './StyledDetectivesList';
import DetectiveItem from './detective-item/DetectiveItem';
import EmployeesSelect from './employees-select/EmployeesSelect';
import {Employee} from '@/api/employee';

const DetectivesList = ({detectives, setDetectives, isEdit, detectivesListId}) => {
    const {t} = useTranslation();

    const [employee, setEmployee] = useState(null);

    const handleAddEmployee = () => {
        if (employee === null) {
            return;
        }
        Employee.updateDetectivesListId(employee.id, detectivesListId)
            .then(data => {
                const updatedDetectives = [
                    ...detectives,
                    data
                ];
                setDetectives(updatedDetectives);
            })
            .catch(e => {
                console.error(e);
            })
            .finally();
    };

    return (
        <StyledDetectivesList $isEdit={isEdit}>
            <div className='detective-title-info'>
                <div className='name-item'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Full name')}
                    </p>
                </div>
            </div>
            {isEmptyArr(detectives) ? (
                detectives.map((detective) => (
                    <DetectiveItem key={detective.id}
                                   detective={detective}
                                   detectives={detectives}
                                   setDetectives={setDetectives}
                                   isEdit={isEdit}
                    />
                ))
            ) : (
                <div className='empty-list-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Detectives are empty')}
                    </p>
                </div>
            )}
            <div className='adding-employee-container'>
                <EmployeesSelect isEdit={isEdit}
                                 employee={employee}
                                 setEmployee={setEmployee}
                                 detectives={detectives}
                />
                <button type='button'
                        onClick={handleAddEmployee}
                        disabled={!isEdit}
                >
                    {t('ProfilePage.SeniorProfile.button.Add')}
                </button>
            </div>
        </StyledDetectivesList>
    );
};

export default DetectivesList;