import {useTranslation} from 'react-i18next';

import {StyledStatusSelect} from './StyledStatusSelect';

const StatusSelect = ({status, setStatus, isEdit}) => {
    const {t} = useTranslation()

    const statuses = [
        {id: 1, value: 'в процесі', title: 'in process'},
        {id: 2, value: 'виконано', title: 'fulffiled'},
        {id: 3, value: 'скасовано', title: 'cancelled'}
    ]

    const handleSelectStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <StyledStatusSelect value={status}
                            onChange={handleSelectStatus}
                            $isEdit={isEdit}
                            disabled={!isEdit}
        >
            {statuses.map((status) => (
                <option value={status.value}
                        key={status.id}
                >
                    {t(`ProfilePage.SeniorProfile.status.${status.title}`)}
                </option>
            ))}
        </StyledStatusSelect>
    );
};

export default StatusSelect;