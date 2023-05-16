import {format} from 'date-fns';
import {useState} from 'react';

import {StyledTreatiesItem} from './StyledTreatiesItem';
import EmployeesSelect from './employees-select/EmployeesSelect';
import StatusSelect from '@/components/screens/profile/chief/treaties/treaties-item/status-select/StatusSelect';
import {Treaty} from '@/api/treaty';

const TreatiesItem = ({treaty}) => {
    const numPattern = /^[0-9]+$/;

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isClientInfo, setIsClientInfo] = useState(false);

    const [priceValue, setPriceValue] = useState(treaty?.price || '');
    const [currentEmployee, setCurrentEmployee] = useState(treaty.employee?.fullName || '');
    const [currentStatus, setCurrentStatus] = useState(treaty?.status || '');

    const handleShowContent = (e) => {
        e.stopPropagation();
        setIsShow(true);
    };

    const handleHideContent = (e) => {
        e.stopPropagation();
        setIsShow(false);
    };

    const handleEditContent = (e) => {
        e.stopPropagation();
        setIsEdit(true);
    };

    const handleCancelEditContent = (e) => {
        e.stopPropagation();
        setPriceValue(treaty.price);
        setIsEdit(false);
    };

    const handlePriceChange = (e) => {
        if (!numPattern.test(e.target.value)) return;
        setPriceValue(e.target.value);
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
        Treaty.update(currentStatus, priceValue, currentEmployee)
            .then()
            .catch()
            .finally();
    };
    return (
        <StyledTreatiesItem onSubmit={handleSubmit}
                            className={isShow ? 'active' : ''}
                            $isEdit={isEdit}
        >
            <div className='treaty-title-info'
                 onClick={isShow ? handleHideContent : handleShowContent}
            >
                <div className='service-item'>
                    <p>{treaty.service}</p>
                </div>
                <div className='place-item'>
                    <p>{treaty.place}</p>
                </div>
                <div className='date-item'>
                    <p>{treaty.createdAt && format(new Date(treaty.createdAt), 'dd/MM/yyyy в HH:mm:ss')}</p>
                </div>
                <div className='status-item'>
                    <p>{treaty.status}</p>
                </div>
                <div className='btn-box'>
                    {isShow ? (
                        <button onClick={handleHideContent}>
                            Скрыть
                        </button>
                    ) : (
                        <button onClick={handleShowContent}>
                            Показать
                        </button>
                    )}
                </div>
            </div>
            <div className={isShow ? 'treaty-content shown' : 'treaty-content'}>
                <div className='treaty-employee-container'>
                    <p>Ответственный детектив: </p>
                    <EmployeesSelect employee={currentEmployee}
                                     setEmployee={setCurrentEmployee}
                                     isEdit={isEdit}
                    />
                </div>
                <div className='treaty-price-container'>
                    <label htmlFor='treaty-price'>
                        Стоимость:
                    </label>
                    <input id='treaty-price'
                           className='treaty-price'
                           type='text'
                           maxLength={6}
                           readOnly={!isEdit}
                           value={priceValue}
                           onChange={handlePriceChange}
                    />
                    ₴
                    {treaty.isPaid !== null && (
                        <label htmlFor='treaty-price'>
                            {treaty.isPaid ? (
                                <span className='paid'>Оплачено</span>
                            ) : (
                                <span className='not-paid'>Не оплачено</span>
                            )}
                        </label>
                    )}
                </div>
                <div className='treaty-client-info'>
                    <div className='client-info-title'>
                        <p>Информация от клиента:</p>
                        {isClientInfo ? (
                            <button onClick={handleHideClientInfo}
                            >
                                Скрыть
                            </button>
                        ) : (
                            <button onClick={handleShowClientInfo}
                            >
                                Показать
                            </button>
                        )}
                    </div>
                    <div className={isClientInfo ? 'client-info shown' : 'client-info'}>
                        <p>{treaty.clientInfo}</p>
                    </div>
                </div>
                <div className='treaty-status-container'>
                    <p>Статус договора:</p>
                    <StatusSelect status={currentStatus}
                                  setStatus={setCurrentStatus}
                                  isEdit={isEdit}
                    />
                </div>
                <div>
                    {treaty.client.fullName ? treaty.client.fullName : 'Пользователь не указал имени'}
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
                                Подтвердить
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
        </StyledTreatiesItem>
    )
        ;
};

export default TreatiesItem;