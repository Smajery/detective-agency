import React from 'react';
import {format} from 'date-fns';
import {useTranslation} from 'react-i18next';

import {isEmptyArr} from '@/utils/is-empty-arr';
import {StyledTreatiesList} from './StyledTreatiesList';
import TreatiesItem from './treaties-item/TreatiesItem';
import SortingSelect from './sorting-select/SortingSelect';

const TreatiesList = ({treaties, sorting, setSorting}) => {
    const {t} = useTranslation()

    return (
        <StyledTreatiesList>
            <div className='sorting-select-container'>
                <SortingSelect sorting={sorting}
                               setSorting={setSorting}
                />
            </div>
            <div className='treaty-title'>
                <div className='service-item-title'>
                    <p>{t('ProfilePage.ChiefProfile.Service')}</p>
                </div>
                <div className='place-item-title'>
                    <p>{t('ProfilePage.ChiefProfile.City')}</p>
                </div>
                <div className='date-item-title'>
                    <p>{t('ProfilePage.ChiefProfile.Created at')}</p>
                </div>
                <div className='status-item-title'>
                    <p>{t('ProfilePage.ChiefProfile.Status')}</p>
                </div>
                <div className='is-paid-item-title'>
                    <p>{t('ProfilePage.ChiefProfile.Payment')}</p>
                </div>
            </div>
            <div className='treaties'>
                {isEmptyArr(treaties) ? (treaties.map((treaty) => (
                    <TreatiesItem treaty={treaty}
                                  key={treaty.id}
                    />
                ))) : (
                    <h3 className='treaties-empty-title'>
                        {t('ProfilePage.ChiefProfile.Treaties are empty')}
                    </h3>
                )}
            </div>
        </StyledTreatiesList>
    );
};

export default TreatiesList;