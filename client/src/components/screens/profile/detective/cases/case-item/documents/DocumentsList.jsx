import {useTranslation} from 'react-i18next';
import {useState} from 'react';

import {isEmptyArr} from '@/utils/is-empty-arr';
import {StyledDocumentsList} from './StyledDocumentsList';
import DocumentItem from './document-item/DocumentItem';

const DocumentsList = ({documents, isEdit, setIsDocumentModal}) => {
    const {t} = useTranslation();

    const handleAddFile = () => {
        setIsDocumentModal(true);
    };

    return (
        <StyledDocumentsList $isEdit={isEdit}>
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
            {isEmptyArr(documents) ? (
                documents.map((doc) => (
                    <DocumentItem key={doc.id}
                                  doc={doc}
                    />
                ))) : (
                <div className='documents-empty-title'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Documents are empty')}
                    </p>
                </div>
            )}
            <div className='adding-document-container'>
                <button type='button'
                        disabled={!isEdit}
                        onClick={handleAddFile}
                >
                    {t('ProfilePage.SeniorProfile.button.Add')}
                </button>
            </div>
        </StyledDocumentsList>
    );
};

export default DocumentsList;