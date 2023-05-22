import {isEmptyArr} from '@/utils/is-empty-arr';
import {useTranslation} from 'react-i18next';

import {StyledDetectivesList} from './StyledDetectivesList';
import DetectiveItem from './detective-item/DetectiveItem';

const DetectivesList = ({detectives}) => {
    const {t} = useTranslation()

    return (
        <StyledDetectivesList>
            <div className='detective-title-info'>
                <div className='name-item'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Full name')}
                    </p>
                </div>
            </div>
            {isEmptyArr(detectives) && detectives.map((detective) => (
                <DetectiveItem key={detective.id}
                               detective={detective}
                />
            ))}
        </StyledDetectivesList>
    );
};

export default DetectivesList;