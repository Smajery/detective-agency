import {format} from 'date-fns';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledDocumentItem} from './StyledDocumentItem';
import {isEmptyArr} from '@/utils/is-empty-arr';

const DocumentItem = ({doc}) => {
    const {t} = useTranslation()

    const [isDocumentInfo, setIsDocumentInfo] = useState(false);
    const [isResultInfo, setIsResultInfo] = useState(false);
    const [isFilesInfo, setIsFilesInfo] = useState(false);

    const [files, setFiles] = useState(doc?.files || []);

    const handleShowDocumentInfo = (e) => {
        e.stopPropagation();
        setIsDocumentInfo(true);
    };

    const handleHideDocumentInfo = (e) => {
        e.stopPropagation();

        setIsFilesInfo(false)
        setIsResultInfo(false)

        setIsDocumentInfo(false);
    };

    const handleShowResultInfo = (e) => {
        e.stopPropagation();
        setIsResultInfo(true);
    };

    const handleHideResultInfo = (e) => {
        e.stopPropagation();
        setIsResultInfo(false);
    };

    const handleShowFilesInfo = (e) => {
        e.stopPropagation();
        setIsFilesInfo(true);
    };

    const handleHideFilesInfo = (e) => {
        e.stopPropagation();
        setIsFilesInfo(false);
    };


    return (
        <StyledDocumentItem className={isDocumentInfo ? 'active' : ''}>
            <div className='document-title'
                 onClick={isDocumentInfo ? handleHideDocumentInfo : handleShowDocumentInfo}
            >
                <div className='type-item'>
                    <p>
                        {t(`ProfilePage.SeniorProfile.type-bd.${doc.type}`)}
                    </p>
                </div>
                <div className='date-item'>
                    <p>
                        {format(new Date(doc.createdAt), 'dd/MM/yyyy | HH:mm:ss')}
                    </p>
                </div>
            </div>
            {isDocumentInfo && (
                <div className='document-content'>
                    <div className='result-item'>
                        <div className='result-title'>
                            <p>
                                {t('ProfilePage.SeniorProfile.Result')}
                            </p>
                            {isResultInfo ? (
                                <button type='button'
                                        onClick={handleHideResultInfo}
                                >
                                    {t('ProfilePage.SeniorProfile.button.Hide')}
                                </button>
                            ) : (
                                <button type='button'
                                        onClick={handleShowResultInfo}
                                >
                                    {t('ProfilePage.SeniorProfile.button.Show')}
                                </button>
                            )}
                        </div>
                        {isResultInfo && (
                            <div className='result-content'>
                                {doc.result}
                            </div>
                        )}
                    </div>
                    <div className='files-item'>
                        <div className='files-title'>
                            <p>
                                {t('ProfilePage.SeniorProfile.Files')}
                            </p>
                            {isFilesInfo ? (
                                <button type='button'
                                        onClick={handleHideFilesInfo}
                                >
                                    {t('ProfilePage.SeniorProfile.button.Hide')}
                                </button>
                            ) : (
                                <button type='button'
                                        onClick={handleShowFilesInfo}
                                >
                                    {t('ProfilePage.SeniorProfile.button.Show')}
                                </button>
                            )}
                        </div>
                        {isFilesInfo && (
                            <div className='files-content'>
                                {isEmptyArr(files) && files.map((file) => (
                                    <div className='file'
                                         key={file.id}
                                    >
                                        <p>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </StyledDocumentItem>
    );
};

export default DocumentItem;