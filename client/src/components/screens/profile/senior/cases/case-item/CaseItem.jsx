import {useTranslation} from 'react-i18next';

import {StyledCaseItem} from './StyledCaseItem';
import {format} from 'date-fns';

const CaseItem = ({currentCase}) => {
    const {t} = useTranslation()
    return (
        <StyledCaseItem>
            <div className='case-title-info'>
                <div className='number-item'>
                    <p>
                        {currentCase.id}
                    </p>
                </div>
                <div className='date-item'>
                    <p>
                        {currentCase.createdAt && format(new Date(currentCase.createdAt), 'dd/MM/yyyy | HH:mm:ss')}
                    </p>
                </div>
                <div className='status-item'>
                    <p>
                        {currentCase.status}
                    </p>
                </div>
            </div>
        </StyledCaseItem>
    );
};

export default CaseItem;