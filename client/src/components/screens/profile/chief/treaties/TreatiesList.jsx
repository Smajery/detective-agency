import React from 'react';
import {format} from 'date-fns';

import {isEmptyArr} from '@/utils/is-empty-arr';
import {StyledTreatiesList} from './StyledTreatiesList';
import TreatiesItem from './treaties-item/TreatiesItem';
import SortingSelect from './sorting-select/SortingSelect';

const TreatiesList = ({treaties, sorting, setSorting}) => {

    return (
        <StyledTreatiesList>
            <div className='treaty-title'>
                <div className='service-item-title'>
                    <p>Услуга:</p>
                </div>
                <div className='place-item-title'>
                    <p>Город:</p>
                </div>
                <div className='date-item-title'>
                    <p>Создано:</p>
                </div>
                <div className='status-item-title'>
                    <p>Статус:</p>
                </div>
                <div className='btn-box-title'>

                </div>
            </div>
            <div className='sorting-select-container'>
                <SortingSelect sorting={sorting}
                               setSorting={setSorting}
                />
            </div>
            {isEmptyArr(treaties) && treaties.map((treaty) => (
                <TreatiesItem treaty={treaty}
                              key={treaty.id}
                />
            ))}
        </StyledTreatiesList>
    );
};

export default TreatiesList;