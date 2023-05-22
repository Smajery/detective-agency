import {useTranslation} from 'react-i18next';
import {format} from 'date-fns';
import {useState} from 'react';

import {StyledCaseItem} from './StyledCaseItem';
import {isEmptyArr} from '@/utils/is-empty-arr';
import DocumentsList from './documents/DocumentsList';
import StatusSelect from './status-select/StatusSelect';
import DetectivesList from './detectives/DetectivesList';

const CaseItem = ({currentCase}) => {
    const {t} = useTranslation();

    const [treaty, setTreaty] = useState(currentCase.treaty);
    const [documents, setDocuments] = useState(currentCase?.documents || []);
    const [detectives, setDetectives] = useState(currentCase?.detectives || []);

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isTreatyInfo, setIsTreatyInfo] = useState(false);
    const [isDocumentsInfo, setIsDocumentsInfo] = useState(false);
    const [isDetectivesInfo, setIsDetectivesInfo] = useState(false);

    const [currentStatus, setCurrentStatus] = useState(currentCase?.status || null);

    const handleShowContent = (e) => {
        e.stopPropagation();
        setIsShow(true);
    };

    const handleHideContent = (e) => {
        e.stopPropagation();
        handleCancelEditContent(e);
        setIsShow(false);
    };

    const handleEditContent = (e) => {
        e.stopPropagation();
        setIsEdit(true);
    };

    const handleCancelEditContent = (e) => {
        e.stopPropagation();

        setIsTreatyInfo(false);
        setIsDocumentsInfo(false);

        setIsEdit(false);
    };

    const handleShowTreatyInfo = (e) => {
        e.stopPropagation();
        setIsTreatyInfo(true);
    };

    const handleHideTreatyInfo = (e) => {
        e.stopPropagation();
        setIsTreatyInfo(false);
    };

    const handleShowDetectivesInfo = (e) => {
        e.stopPropagation();
        setIsDetectivesInfo(true);
    };

    const handleHideDetectivesInfo = (e) => {
        e.stopPropagation();
        setIsDetectivesInfo(false);
    };

    const handleShowDocumentsInfo = (e) => {
        e.stopPropagation();
        setIsDocumentsInfo(true);
    };

    const handleHideDocumentsInfo = (e) => {
        e.stopPropagation();
        setIsDocumentsInfo(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <StyledCaseItem onSubmit={handleSubmit}
                        className={isShow ? 'active' : ''}
                        $status={currentCase.status}
        >
            <div className='case-title-info'
                 onClick={isShow ? handleHideContent : handleShowContent}
            >
                <div className='number-item'>
                    <p>
                        {t('ProfilePage.SeniorProfile.Case')} № {currentCase.id}
                    </p>
                </div>
                <div className='date-item'>
                    <p>
                        {currentCase.createdAt && format(new Date(currentCase.createdAt), 'dd/MM/yyyy | HH:mm:ss')}
                    </p>
                </div>
                <div className='status-item'>
                    <p>
                        {t(`ProfilePage.SeniorProfile.status-bd.${currentCase.status}`)}
                    </p>
                </div>
            </div>
            {isShow && (
                <div className='case-content'>
                    <div className='left-side'>
                        <div className='treaty-info'>
                            <div className='treaty-info-title'>
                                <p>
                                    {t('ProfilePage.SeniorProfile.Information from a treaty')}
                                </p>
                                {isTreatyInfo ? (
                                    <button type='button'
                                            onClick={handleHideTreatyInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Hide')}
                                    </button>
                                ) : (
                                    <button type='button'
                                            onClick={handleShowTreatyInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Show')}
                                    </button>
                                )}
                            </div>
                            {isTreatyInfo && (
                                <div className='treaty-info-content'>
                                    <div>
                                        <p>
                                            {t('ProfilePage.SeniorProfile.Service')} {treaty.service}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {t('ProfilePage.SeniorProfile.City')} {treaty.place}
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <div className='client-info-title'>
                                            <p>
                                                {t('ProfilePage.SeniorProfile.Information from a client')}
                                            </p>
                                        </div>
                                        {isTreatyInfo && (
                                            <div className='client-info'>
                                                <p>{treaty.clientInfo}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='case-status'>
                            <p>
                                {t('ProfilePage.SeniorProfile.Case status')}
                            </p>
                            <StatusSelect status={currentStatus}
                                          setStatus={setCurrentStatus}
                            />
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='documents-info'>
                            <div className='documents-info-title'>
                                <p>
                                    {t('ProfilePage.SeniorProfile.Case documents')}
                                </p>
                                {isDocumentsInfo ? (
                                    <button type='button'
                                            onClick={handleHideDocumentsInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Hide')}
                                    </button>
                                ) : (
                                    <button type='button'
                                            onClick={handleShowDocumentsInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Show')}
                                    </button>
                                )}
                            </div>
                            {isDocumentsInfo && (
                                <DocumentsList documents={documents} />
                            )}
                        </div>
                        <div className='detectives-info'>
                            <div className='detectives-info-title'>
                                <p>
                                    {t('ProfilePage.SeniorProfile.List of detectives')}
                                </p>
                                {isDetectivesInfo ? (
                                    <button type='button'
                                            onClick={handleHideDetectivesInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Hide')}
                                    </button>
                                ) : (
                                    <button type='button'
                                            onClick={handleShowDetectivesInfo}
                                    >
                                        {t('ProfilePage.SeniorProfile.button.Show')}
                                    </button>
                                )}
                            </div>
                            {isDetectivesInfo && (
                                <DetectivesList detectives={detectives} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </StyledCaseItem>
    );
};

export default CaseItem;