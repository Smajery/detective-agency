import {useTranslation} from 'react-i18next';

import {StyledStatusSelect} from './StyledStatusSelect';

const StatusSelect = ({status, setStatus, isEdit}) => {
    const {t} = useTranslation();

    const statuses = [
        {id: 1, title: 'pending', value: 'в очікуванні'},
        {id: 2, title: 'approved', value: 'схвалено'},
        {id: 3, title: 'rejected', value: 'відхилено'},
        {id: 4, title: 'fulffiled', value: 'виконано'},
    ];

    const handleSelectStatus = (e) => {
        setStatus(e.target.value);
    };
    return (
        <StyledStatusSelect value={status}
                            onChange={handleSelectStatus}
                            disabled={!isEdit}
                            $isEdit={isEdit}
        >
            <option value='в очікуванні'>
                {t('ProfilePage.ChiefProfile.status.Select')}
            </option>
            {statuses.map((status) => (
                <option value={status.value}>
                    {t(`ProfilePage.ChiefProfile.status.${status.title}`)}
                </option>
            ))}
        </StyledStatusSelect>
    );
};

export default StatusSelect;