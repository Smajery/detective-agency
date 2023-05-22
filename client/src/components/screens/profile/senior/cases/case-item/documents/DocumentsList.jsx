import {useTranslation} from 'react-i18next';

import {isEmptyArr} from '@/utils/is-empty-arr';
import {StyledDocumentsList} from './StyledDocumentsList';
import DocumentItem from './document-item/DocumentItem';

const DocumentsList = ({documents}) => {
    const {t} = useTranslation()
    return (
        <StyledDocumentsList>
            <div className='document-info-title'>
                <div className='type-item-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Type')}
                    </p>
                </div>
                <div className='date-item-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Created at')}
                    </p>
                </div>
            </div>
            {isEmptyArr(documents) && documents.map((doc) => (
                <DocumentItem key={doc.id}
                              doc={doc}
                />
            ))}
        </StyledDocumentsList>
    );
};

export default DocumentsList;