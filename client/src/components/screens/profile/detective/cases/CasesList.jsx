import {useTranslation} from 'react-i18next';

import {StyledCasesList} from './StyledCasesList';
import {isEmptyArr} from '@/utils/is-empty-arr';
import CaseItem from '@/components/screens/profile/detective/cases/case-item/CaseItem';

const CasesList = ({cases}) => {
    const {t} = useTranslation();
    return (
        <StyledCasesList>
            <div className='case-title'>
                <div className='number-item-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Case number')}
                    </p>
                </div>
                <div className='date-item-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Created at')}
                    </p>
                </div>
                <div className='status-item-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Status')}
                    </p>
                </div>
            </div>
            <div className='cases'>
                {isEmptyArr(cases) ? (
                    cases.map((c) => (
                        <CaseItem c={c}
                                  key={c.id}
                        />
                    ))
                ) : (
                    <h3 className='cases-empty-title'>
                        {t('ProfilePage.SeniorProfile.Cases are empty')}
                    </h3>
                )}
            </div>
        </StyledCasesList>
    );
};

export default CasesList;