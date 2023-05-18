import {useTranslation} from 'react-i18next';

import {StyledStatusSelect} from './StyledStatusSelect';

const StatusSelect = ({status, setStatus, isEdit, setCurrentStatusError, isPaid, completedAt}) => {
    const {t} = useTranslation();

    const statuses = [
        {id: 1, title: 'pending', value: 'в очікуванні'},
        {id: 2, title: 'approved', value: 'схвалено'},
        {id: 3, title: 'rejected', value: 'відхилено'},
        {id: 4, title: 'fulffiled', value: 'виконано'},
    ];

    const handleSelectStatus = (e) => {
        const statusInput = e.target.value
        let newCurrentStatusError = ''
        if (completedAt && statusInput !== 'виконано') {
            newCurrentStatusError = 'Cannot be changed to this status after the end of the treaty';
        } else if (isPaid && (statusInput === 'відхилено' || statusInput === 'в очікуванні')) {
            newCurrentStatusError = 'Cannot be changed to this status after payment';
        }
        setCurrentStatusError(newCurrentStatusError)
        setStatus(statusInput);
    };
    return (
        <StyledStatusSelect value={status}
                            onChange={handleSelectStatus}
                            disabled={!isEdit}
                            $isEdit={isEdit}
        >
            {statuses.map((status) => (
                <option value={status.value}
                        key={status.id}
                >
                    {t(`ProfilePage.ChiefProfile.status.${status.title}`)}
                </option>
            ))}
        </StyledStatusSelect>
    );
};

export default StatusSelect;