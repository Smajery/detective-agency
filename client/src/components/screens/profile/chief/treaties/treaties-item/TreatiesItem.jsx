import {format} from 'date-fns';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledTreatiesItem} from './StyledTreatiesItem';
import EmployeesSelect from './employees-select/EmployeesSelect';
import StatusSelect from '@/components/screens/profile/chief/treaties/treaties-item/status-select/StatusSelect';
import {Treaty} from '@/api/treaty';
import Loader from '@/components/ui/loader/Loader';
import MessageModal from '@/components/ui/modals/message/MessageModal';

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
        handleCancelEditContent(e)
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


    const handleSubmit = (e) => {
        e.preventDefault();

        let newCurrentEmployeeError = '';
        let newPriceValueError = '';
        let newCurrentStatusError = '';

        if (currentTreaty.isPaid && (currentStatus === 'відхилено' || currentStatus === 'в очікуванні')) {
            return setCurrentStatusError('Статус не может быть изменен на это значение после оплаты');
        }
        if (currentStatus === 'виконано' && Object.keys(currentEmployee).length === 0) {
            return setCurrentEmployeeError('Нельзя убрать ответственного детектива из завершенного договора');
        }

        if (priceValue !== '' && currentStatus === 'в очікуванні') {
            newCurrentStatusError = 'Измените статус на другое значение';
        }
        if (currentTreaty.isPaid === null && Object.keys(currentEmployee).length !== 0) {
            newCurrentEmployeeError = 'Выбрать ответственного детектива можно только после оплаты';
        }
        if (currentStatus === 'відхилено' && Object.keys(currentEmployee).length !== 0) {
            newCurrentEmployeeError = 'Выбрать ответственного детектива можно только для подтвержденных договоров';
        }
        if (currentStatus === 'відхилено' && priceValue !== '' && priceValue !== null) {
            newPriceValueError = 'Оценить стоимость можно только для подтвержденных договоров';
        }
        if (currentTreaty.isPaid && Object.keys(currentEmployee).length === 0) {
            newCurrentEmployeeError = 'Выберите ответственного детектива';
        }
        if ((priceValue === '' || !currentTreaty.isPaid || Object.keys(currentEmployee).length === 0) && currentStatus === 'виконано') {
            newCurrentStatusError = 'Статус не может быть изменен на виконано';
        }
        if (currentStatus !== 'відхилено' && priceValue === '') {
            newPriceValueError = 'Вы не указали стоимость договора';
        }

        setCurrentEmployeeError(newCurrentEmployeeError);
        setPriceValueError(newPriceValueError);
        setCurrentStatusError(newCurrentStatusError);

        if (newCurrentEmployeeError !== '' || newPriceValueError !== '' || newCurrentStatusError !== '') return;

        const currentPrice = priceValue ===  '' ? null : priceValue

        setIsLoading(true);
        Treaty.update(currentStatus, currentPrice, currentEmployee.id, currentTreaty.id)
            .then(data => {
                setCurrentTreaty(data);
                setMessageModalText('Договор успешно изменен');
                setIsMessageModal(true);
                setIsEdit(false);
            })
            .catch(e => {
                setMessageModalText(e.response.data.message);
                setIsMessageModal(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <StyledTreatiesItem onSubmit={handleSubmit}
                            className={isShow ? 'active' : ''}
                            $isEdit={!currentTreaty.isPaid && isEdit}
                            $status={currentTreaty.status}
        >
            <div className='treaty-title-info'
                 onClick={isShow ? handleHideContent : handleShowContent}
            >
                <div className='service-item'>
                    <p>{currentTreaty.service}</p>
                </div>
                <div className='place-item'>
                    <p>{currentTreaty.place}</p>
                </div>
                <div className='date-item'>
                    <p>{currentTreaty.createdAt && format(new Date(currentTreaty.createdAt), 'dd/MM/yyyy в HH:mm:ss')}</p>
                </div>
                <div className='status-item'>
                    <p>{currentTreaty.status}</p>
                </div>
                <div className='btn-box'>
                    {isShow ? (
                        <button type='button'
                                onClick={handleHideContent}
                        >
                            Скрыть
                        </button>
                    ) : (
                        <button type='button'
                                onClick={handleShowContent}
                        >
                            Показать
                        </button>
                    )}
                </div>
            </div>
            {isShow && (
                <div className='treaty-content'>
                    <div className='treaty-employee-container'>
                        <p>Ответственный детектив: </p>
                        <EmployeesSelect employee={currentEmployee}
                                         setEmployee={setCurrentEmployee}
                                         isEdit={isEdit}
                                         setCurrentEmployeeError={setCurrentEmployeeError}
                                         status={currentStatus}
                        />
                    </div>
                    {currentEmployeeError !== '' && (
                        <div className='error-text-box'>
                            <p className='error-text'>
                                {t(`TreatyPage.${currentEmployeeError}`)}
                            </p>
                        </div>
                    )}
                    <div className='treaty-price-container'>
                        <label htmlFor='treaty-price'>
                            Стоимость:
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
                                    <span>Ожидает оплаты</span>
                                ) : (
                                    currentTreaty.isPaid ? (
                                        <span className='paid'>Оплачено</span>
                                    ) : (
                                        <span className='not-paid'>Оплата отменена</span>
                                    ))}
                            </label>
                        )}
                    </div>
                    {priceValueError !== '' && (
                        <div className='error-text-box'>
                            <p className='error-text'>
                                {t(`TreatyPage.${priceValueError}`)}
                            </p>
                        </div>
                    )}
                    <div className='treaty-client-info'>
                        <div className='client-info-title'>
                            <p>Информация от клиента:</p>
                            {isClientInfo ? (
                                <button type='button'
                                        onClick={handleHideClientInfo}
                                >
                                    Скрыть
                                </button>
                            ) : (
                                <button type='button'
                                        onClick={handleShowClientInfo}
                                >
                                    Показать
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
                        <p>Статус договора:</p>
                        <StatusSelect status={currentStatus}
                                      setStatus={setCurrentStatus}
                                      isEdit={isEdit}
                                      setCurrentStatusError={setCurrentStatusError}
                                      isPaid={currentTreaty.isPaid}
                        />
                    </div>
                    {currentStatusError !== '' && (
                        <div className='error-text-box'>
                            <p className='error-text'>
                                {t(`TreatyPage.${currentStatusError}`)}
                            </p>
                        </div>
                    )}
                    <div className='treaty-client-container'>
                        <p>Имя клиента:</p>
                        {currentCLient?.fullName ? (
                            <p>{currentCLient.fullName}</p>
                        ) : (
                            <p>Пользователь не указал имени</p>
                        )}
                    </div>
                    <div className='btn-box'>
                        {isEdit ? (
                            <>
                                <button type='button'
                                        onClick={handleCancelEditContent}
                                >
                                    Отменить
                                </button>
                                <button type='submit'>
                                    {isLoading ? (
                                        <Loader />
                                    ) : (
                                        'Подтвердить'
                                    )}
                                </button>
                            </>
                        ) : (
                            <button type='button'
                                    onClick={handleEditContent}
                            >
                                Изменить
                            </button>
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