import {isEmptyArr} from '@/utils/is-empty-arr';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';

import {StyledDetectivesList} from './StyledDetectivesList';
import DetectiveItem from './detective-item/DetectiveItem';

const DetectivesList = ({detectives, setDetectives, isEdit, detectivesListId}) => {
    const {t} = useTranslation();

    const [employee, setEmployee] = useState({});

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
        </StyledDetectivesList>
    );
};

export default DetectivesList;