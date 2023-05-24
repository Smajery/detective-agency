import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledDetectiveItem} from './StyledDetectiveItem';
import {Employee} from '@/api/employee';

const DetectiveItem = ({detective, detectives, setDetectives, isEdit}) => {
    const {t} = useTranslation();

    const [isDetectiveInfo, setIsDetectiveInfo] = useState(false);


    const handleShowDetectiveInfo = (e) => {
        e.stopPropagation();
        setIsDetectiveInfo(true);
    };

    const handleHideDetectiveInfo = (e) => {
        e.stopPropagation();
        setIsDetectiveInfo(false);
    };

    return (
        <StyledDetectiveItem className={isDetectiveInfo ? 'active' : ''}
                             $isEdit={isEdit}
        >
            <div className='detective-title'
                 onClick={isDetectiveInfo ? handleHideDetectiveInfo : handleShowDetectiveInfo}
            >
                <p>
                    {detective.fullName}
                </p>
            </div>
            {isDetectiveInfo && (
                <div className='detective-content'>
                    <div>
                        <p>
                            {t('ProfilePage.SeniorProfile.Email')} {detective.email}
                        </p>
                    </div>
                    <div>
                        <p>
                            {t('ProfilePage.SeniorProfile.Phone number')} {detective.phoneNumber}
                        </p>
                    </div>
                </div>
            )}
        </StyledDetectiveItem>
    );
};

export default DetectiveItem;