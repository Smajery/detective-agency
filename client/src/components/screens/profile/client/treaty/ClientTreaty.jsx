import {format} from 'date-fns';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

import {StyledClientTreaty} from './StyledClientTreaty';
import {Treaty} from '@/api/treaty';
import Loader from '@/components/ui/loader/Loader';
import MessageModal from '@/components/ui/modals/message/MessageModal';
import ConfirmModal from '@/components/ui/modals/confirm/ConfirmModal';

const ClientTreaty = ({treaty, setTreaty}) => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);
    const [isPaid, setIsPaid] = useState(null);

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
        setMessageModalText('');
    };

    const [isConfirmModal, setIsConfirmModal] = useState(false);
    const [confirmModalText, setConfirmModalText] = useState('');

    const handleCloseConfirmModal = () => {
        setIsConfirmModal(false);
    };

    const initiateIsPaid = (boolean) => {
        setConfirmModalText(boolean ? 'Confirm the payment' : 'Cancel the payment');
        setIsConfirmModal(true);
    };

    const handleInitiateIsPaid = (boolean) => {
        setIsPaid(boolean);
        initiateIsPaid(boolean);
    };

    const handleConfirm = (isConfirm) => {
        setIsConfirmModal(false);
        if (isConfirm) {
            setIsLoading(true);
            Treaty.updateIsPaid(isPaid, treaty.id)
                .then(data => {
                    setMessageModalText(isPaid ? 'The treaty successfully paid' : 'The payment rejected');
                    setIsMessageModal(true);
                    setTreaty(data);
                })
                .catch(e => {
                    setMessageModalText(e.response.data.message);
                    setIsMessageModal(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const handleDeleteTreaty = () => {
        setIsLoading(true);
        Treaty.delete(treaty.id)
            .then(() => {
                setMessageModalText('Current treaty was deleted');
                setIsMessageModal(true);
                setTreaty({});
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
        <StyledClientTreaty $status={treaty.status}>
            <div className='treaty-title-box'>
                <h3>
                    {t('TreatyPage.Treaty')} № {treaty.id}
                </h3>
            </div>
            <div className='about-box'>
                <p>
                    <span className='title'>
                        {t('ProfilePage.ClientProfile.Information from you')}
                    </span><br />
                    {treaty.clientInfo}
                </p>
                <p>
                    <span className='title'>
                        {t('ProfilePage.ClientProfile.Your chosen city')}
                    </span> {t(`ProfilePage.ClientProfile.city.${treaty.place}`)}
                </p>
                <p>
                    <span className='title'>
                        {t('ProfilePage.ClientProfile.Your chosen service')}
                    </span> {t(`ProfilePage.ClientProfile.service.${treaty.service}`)}
                </p>
                <p>
                    <span className='title'>
                        {t('ProfilePage.ClientProfile.Status')}
                    </span> <span className='status-text'>
                        {t(`ProfilePage.ClientProfile.status.${treaty.status}`)}
                    </span>
                </p>
                <p>
                    <span className='title'>
                        {t('ProfilePage.ClientProfile.The treaty was created at')}
                    </span> {treaty.createdAt && format(new Date(treaty.createdAt), 'dd/MM/yyyy | HH:mm:ss')}
                </p>
                {(treaty.status === 'схвалено' || treaty.status === 'виконано') &&
                    <p className='price-text'>{t('ProfilePage.ClientProfile.Price')} {treaty.price} ₴</p>
                }
            </div>
            {treaty.status === 'схвалено' && treaty.isPaid === null && (
                isLoading ? (
                    <Loader />
                ) : (
                    <div className='is-paid-btn-box'>
                        <button onClick={() => handleInitiateIsPaid(false)}
                                className='cancel-btn'
                        >
                            {t('ProfilePage.ClientProfile.To reject')}
                        </button>
                        <button onClick={() => handleInitiateIsPaid(true)}
                                className='confirm-btn'
                        >
                            {t('ProfilePage.ClientProfile.To pay')}
                        </button>
                    </div>
                ))}
            {treaty.isPaid !== null && (
                treaty.isPaid ? (
                    <div className='is-paid-status-box'>
                        {treaty.employeeId && (
                            <p>
                                {treaty.status === 'виконано' ? (
                                    t('ProfilePage.ClientProfile.Your treaty has been fulffilled')
                                ) : (
                                    t('ProfilePage.ClientProfile.Your treaty is being handled')
                                )}
                            </p>
                        )}
                        <p className='is-paid-true'>
                            {t('ProfilePage.ClientProfile.Paid')}
                        </p>
                    </div>
                ) : (
                    <div className='is-paid-status-box'>
                        <p className='is-paid-false'>
                            {t('ProfilePage.ClientProfile.Not paid')}
                        </p>
                    </div>
                ))}
            {treaty.status === 'в очікуванні' &&
                <div className='treaty-expl-text-box'>
                    <p className='exp-text'>
                                    <span className='ps-text'>
                                        {t('TreatyPage.Note')}
                                    </span><br />
                        • {t('TreatyPage.After sending the treaty')}<br />
                        • {t('TreatyPage.After approved')}
                    </p>
                </div>
            }
            {treaty.status === 'в очікуванні' &&
                <button onClick={handleDeleteTreaty}
                        className='treaty-delete-btn'
                >
                    {t('ProfilePage.ClientProfile.Delete')}
                </button>
            }
            {treaty.status === 'відхилено' &&
                <div className='treaty-expl-text-box'>
                    <p className='expl-text'>
                        <span className='title'>{t('ProfilePage.ClientProfile.Comment')}</span><br />
                        {t('ProfilePage.ClientProfile.The treaty has been rejected')}
                    </p>
                </div>
            }
            <MessageModal child={messageModalText}
                          isActive={isMessageModal}
                          handleClose={handleCloseMessageModal}
            />
            <ConfirmModal child={confirmModalText}
                          isActive={isConfirmModal}
                          handleClose={handleCloseConfirmModal}
                          handleConfirm={handleConfirm}
            />
        </StyledClientTreaty>
    );
};

export default ClientTreaty;