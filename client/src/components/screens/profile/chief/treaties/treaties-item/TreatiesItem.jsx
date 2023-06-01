import {format} from 'date-fns';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledTreatiesItem} from './StyledTreatiesItem';
import EmployeesSelect from './employees-select/EmployeesSelect';
import StatusSelect from '@/components/screens/profile/chief/treaties/treaties-item/status-select/StatusSelect';
import {Treaty} from '@/api/treaty';
import Loader from '@/components/ui/loader/Loader';
import MessageModal from '@/components/ui/modals/message/MessageModal';
import {calculateExperience} from '@/utils/calculate-experience';

const TreatiesItem = ({treaty}) => {
    const {t} = useTranslation();

    const numPattern = /^[0-9]+$/;

    const [currentTreaty, setCurrentTreaty] = useState(treaty);

    const [isLoading, setIsLoading] = useState(false);

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
        setMessageModalText('');
    };

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isClientInfo, setIsClientInfo] = useState(false);
    const [isEmployeeInfo, setIsEmployeeInfo] = useState(false);

    const [currentCLient, setCurrentClient] = useState(currentTreaty?.client || {});

    const [currentEmployee, setCurrentEmployee] = useState(currentTreaty?.employee || {});
    const [currentEmployeeError, setCurrentEmployeeError] = useState('');

    const [priceValue, setPriceValue] = useState(currentTreaty?.price || '');
    const [priceValueError, setPriceValueError] = useState('');

    const [currentStatus, setCurrentStatus] = useState(currentTreaty?.status || null);
    const [currentStatusError, setCurrentStatusError] = useState('');

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

        setPriceValue(currentTreaty?.price || '');
        setCurrentEmployee(currentTreaty?.employee || {});
        setCurrentStatus(currentTreaty?.status || null);

        setCurrentEmployeeError('');
        setPriceValueError('');
        setCurrentStatusError('');

        setIsClientInfo(false);
        setIsEmployeeInfo(false);

        setIsEdit(false);
    };

    const handlePriceChange = (e) => {
        const priceInput = e.target.value;
        let newPriceValueError = '';
        if (currentStatus !== 'відхилено' && priceInput === '') {
            newPriceValueError = 'Price is empty';
        } else if (currentStatus !== 'відхилено' && !numPattern.test(priceInput)) {
            newPriceValueError = 'Incorrect price';
        }
        setTimeout(() => {
            setPriceValueError(newPriceValueError);
        }, 1000);
        setPriceValue(priceInput);
    };

    const handleShowClientInfo = (e) => {
        e.stopPropagation();
        setIsClientInfo(true);
    };

    const handleHideClientInfo = (e) => {
        e.stopPropagation();
        setIsClientInfo(false);
    };

    const handleShowEmployeeInfo = (e) => {
        e.stopPropagation();
        setIsEmployeeInfo(true);
    };

    const handleHideEmployeeInfo = (e) => {
        e.stopPropagation();
        setIsEmployeeInfo(false);
    };

    const changeIsPaidText = (isPaid, price) => {
        let currentText = ''

        if (isPaid === null && (price !== '' && price !== null)) {
            currentText = 'pending';
        } else if (isPaid === true) {
            currentText = 'fulffiled';
        } else if (isPaid === false) {
            currentText = 'rejected';
        }

        return currentText;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let newCurrentEmployeeError = '';
        let newPriceValueError = '';
        let newCurrentStatusError = '';

        if (Number(priceValue) <= 0) {
            newPriceValueError = 'Incorrect price'
        }

        if (currentTreaty.completedAt && currentStatus !== 'виконано') {
            newCurrentStatusError = 'Cannot be changed to this status after the end of the treaty';
            return setCurrentStatusError(newCurrentStatusError);
        }

        if (currentTreaty.isPaid) {
            if (currentStatus === 'в очікуванні' || currentStatus === 'відхилено') {
                newCurrentStatusError = 'Cannot be changed to this status after payment';
                return setCurrentStatusError(newCurrentStatusError);
            }
        }

        if (currentStatus === 'в очікуванні') {
            if (Object.keys(currentEmployee).length !== 0) {
                newCurrentEmployeeError = 'In this status, you cannot select a responsible detective';
            }
            if (priceValue !== '') {
                newPriceValueError = 'You can not select a price in this status';
            }
        }

        if (currentStatus === 'схвалено') {
            if (priceValue === '' || priceValue === null) {
                newCurrentStatusError = 'Cannot be changed to this status until the price is specified';
            }
            if (currentTreaty.isPaid === null && Object.keys(currentEmployee).length !== 0) {
                newCurrentEmployeeError = 'You can not choose a responsible detective until the client has paid the treaty';
            }
        }

        if (currentStatus === 'відхилено') {
            if (Object.keys(currentEmployee).length !== 0) {
                newCurrentEmployeeError = 'In this status, you cannot select a responsible detective';
            }
            if (priceValue !== '' && currentTreaty.isPaid !== false) {
                newPriceValueError = 'You can not select a price in this status';
            }
        }

        if (currentStatus === 'виконано') {
            if (currentTreaty.isPaid === null || currentTreaty.isPaid === false) {
                newCurrentStatusError = 'You can not choose this status until the client has paid the treaty';
            }
            if (currentTreaty.isPaid && Object.keys(currentEmployee).length === 0) {
                newCurrentEmployeeError = 'You cannot remove the responsible detective from a completed treaty';
            }
        }

        setCurrentEmployeeError(newCurrentEmployeeError);
        setPriceValueError(newPriceValueError);
        setCurrentStatusError(newCurrentStatusError);

        if (newCurrentEmployeeError !== '' || newPriceValueError !== '' || newCurrentStatusError !== '') return;

        const currentPrice = priceValue === '' ? null : priceValue;

        setIsLoading(true);
        Treaty.update(currentStatus, currentPrice, currentEmployee.id, currentTreaty.id)
            .then(data => {
                setCurrentTreaty(data);
                setMessageModalText('The treaty has been successfully updated');
                setIsMessageModal(true);
                setIsEdit(false);
            })
            .catch(e => {
                setMessageModalText(e.response.data.message);
                setIsMessageModal(true);
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => {
                    setIsMessageModal(false);
                }, 5 * 1000);
            });
    };

    return (
        <StyledTreatiesItem onSubmit={handleSubmit}
                            className={isShow ? 'active' : ''}
                            $isPaid={currentTreaty.isPaid}
                            $isEdit={!currentTreaty.isPaid && isEdit}
                            $status={currentTreaty.status}
        >
            <div className='treaty-title-info'
                 onClick={isShow ? handleHideContent : handleShowContent}
            >
                <div className='service-item'>
                    <p>{t(`ProfilePage.ChiefProfile.service.${currentTreaty.service}`)}</p>
                </div>
                <div className='place-item'>
                    <p>{t(`ProfilePage.ChiefProfile.city.${currentTreaty.place}`)}</p>
                </div>
                <div className='date-item'>
                    <p>{currentTreaty.createdAt && format(new Date(currentTreaty.createdAt), 'dd/MM/yyyy | HH:mm:ss')}</p>
                </div>
                <div className='status-item'>
                    <p>{t(`ProfilePage.ChiefProfile.status-bd.${currentTreaty.status}`)}</p>
                </div>
                <div className='is-paid-item-title'>
                    <p>{t(`ProfilePage.ChiefProfile.${changeIsPaidText(currentTreaty.isPaid, currentTreaty.price)}`)}</p>
                </div>
            </div>
            {isShow && (
                <div className='treaty-content'>
                    <div className='left-side'>
                        <div className='treaty-employee-container'>
                            <p>{t('ProfilePage.ChiefProfile.Responsible detective')}</p>
                            <EmployeesSelect employee={currentEmployee}
                                             setEmployee={setCurrentEmployee}
                                             isEdit={isEdit}
                                             setCurrentEmployeeError={setCurrentEmployeeError}
                                             status={currentStatus}
                                             completedAt={currentTreaty.completedAt}
                            />
                        </div>
                        {currentEmployeeError !== '' && (
                            <div className='error-text-box'>
                                <p className='error-text'>
                                    {t(`ProfilePage.ChiefProfile.error.${currentEmployeeError}`)}
                                </p>
                            </div>
                        )}
                        <div className='treaty-price-container'>
                            <label htmlFor='treaty-price'>
                                {t('ProfilePage.ChiefProfile.Price')}
                            </label>
                            <input id='treaty-price'
                                   className='treaty-price'
                                   type='text'
                                   maxLength={6}
                                   readOnly={currentTreaty.isPaid || !isEdit}
                                   value={priceValue}
                                   onChange={handlePriceChange}
                            />
                            ₴
                            {currentTreaty.price !== null && (
                                <label htmlFor='treaty-price'>
                                    {currentTreaty.isPaid === null ? (
                                        <span>{t('ProfilePage.ChiefProfile.Pending payment')}</span>
                                    ) : (
                                        currentTreaty.isPaid ? (
                                            <span className='paid'>{t('ProfilePage.ChiefProfile.Paid')}</span>
                                        ) : (
                                            <span className='not-paid'>{t('ProfilePage.ChiefProfile.Not paid')}</span>
                                        ))}
                                </label>
                            )}
                        </div>
                        {priceValueError !== '' && (
                            <div className='error-text-box'>
                                <p className='error-text'>
                                    {t(`ProfilePage.ChiefProfile.error.${priceValueError}`)}
                                </p>
                            </div>
                        )}
                        <div className='treaty-client-info'>
                            <div className='client-info-title'>
                                <p>{t('ProfilePage.ChiefProfile.Information from a client')}</p>
                                {isClientInfo ? (
                                    <button type='button'
                                            onClick={handleHideClientInfo}
                                    >
                                        {t('ProfilePage.ChiefProfile.button.Hide')}
                                    </button>
                                ) : (
                                    <button type='button'
                                            onClick={handleShowClientInfo}
                                    >
                                        {t('ProfilePage.ChiefProfile.button.Show')}
                                    </button>
                                )}
                            </div>
                            {isClientInfo && (
                                <div className='client-info'>
                                    <p>{currentTreaty.clientInfo}</p>
                                </div>
                            )}
                        </div>
                        <div className='treaty-status-container'>
                            <p>{t('ProfilePage.ChiefProfile.Treaty status')}</p>
                            <StatusSelect status={currentStatus}
                                          setStatus={setCurrentStatus}
                                          isEdit={isEdit}
                                          setCurrentStatusError={setCurrentStatusError}
                                          isPaid={currentTreaty.isPaid}
                                          completedAt={currentTreaty.completedAt}
                            />
                        </div>
                        {currentStatusError !== '' && (
                            <div className='error-text-box'>
                                <p className='error-text'>
                                    {t(`ProfilePage.ChiefProfile.error.${currentStatusError}`)}
                                </p>
                            </div>
                        )}
                        <div className='treaty-client-container'>
                            <p>{t('ProfilePage.ChiefProfile.Client name')}</p>
                            {currentCLient?.fullName ? (
                                <p>{currentCLient.fullName}</p>
                            ) : (
                                <p>{t('ProfilePage.ChiefProfile.A client did not provide his name')}</p>
                            )}
                        </div>
                        <div className='btn-box'>
                            {isEdit ? (
                                <>
                                    <button type='button'
                                            onClick={handleCancelEditContent}
                                    >
                                        {t('ProfilePage.ChiefProfile.button.Cancel')}
                                    </button>
                                    <button type='submit'>
                                        {isLoading ? (
                                            <Loader />
                                        ) : (
                                            t('ProfilePage.ChiefProfile.button.Confirm')
                                        )}
                                    </button>
                                </>
                            ) : (
                                <button className='change-btn'
                                        type='button'
                                        onClick={handleEditContent}
                                >
                                    {t('ProfilePage.ChiefProfile.button.Change')}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='right-side'>
                        {Object.keys(currentEmployee).length !== 0 && (
                            <div className='treaty-employee-info'>
                                <div className='employee-info-title'>
                                    <p>{t('ProfilePage.ChiefProfile.Information about the detective')}</p>
                                    {isEmployeeInfo ? (
                                        <button type='button'
                                                onClick={handleHideEmployeeInfo}
                                        >
                                            {t('ProfilePage.ChiefProfile.button.Hide')}
                                        </button>
                                    ) : (
                                        <button type='button'
                                                onClick={handleShowEmployeeInfo}
                                        >
                                            {t('ProfilePage.ChiefProfile.button.Show')}
                                        </button>
                                    )}
                                </div>
                                {isEmployeeInfo && (
                                    <div className='employee-info'>
                                        <p>
                                            {t('ProfilePage.ChiefProfile.Full name')} {currentEmployee.fullName}
                                        </p>
                                        <p>
                                            {t('ProfilePage.ChiefProfile.Job e-mail')} {currentEmployee.email}</p>
                                        <p>
                                            {t('ProfilePage.ChiefProfile.Job phone number')} {currentEmployee.phoneNumber}
                                        </p>
                                        <p>
                                            {t('ProfilePage.ChiefProfile.Job experience')} {calculateExperience(currentEmployee.employmentedAt)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
            <MessageModal child={messageModalText}
                          isActive={isMessageModal}
                          handleClose={handleCloseMessageModal}
            />
        </StyledTreatiesItem>
    )
        ;
};

export default TreatiesItem;