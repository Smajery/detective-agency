import {format} from 'date-fns';
import {useTranslation} from 'react-i18next';
import {StyledClientTreaty} from './StyledClientTreaty';

const ClientTreaty = ({currentTreaty}) => {
    const {t} = useTranslation();

    return (
        <StyledClientTreaty $status={currentTreaty.status}>
            <div className='treaty-title-box'>
                <h3>{t('TreatyPage.Treaty')} № {currentTreaty.id}</h3>
                {currentTreaty.status === 'в очікуванні' &&
                    <button className='treaty-delete-btn'>
                        {t('ProfilePage.Delete')}
                    </button>
                }
            </div>
            <div className='about-box'>
                <p>{t('ProfilePage.Information from you')} {currentTreaty.clientInfo}</p>
                <p>{t('ProfilePage.Your chosen city')} {t(`ProfilePage.city.${currentTreaty.place}`)}</p>
                <p>{t('ProfilePage.Your chosen service')} {t(`ProfilePage.service.${currentTreaty.service}`)}</p>
                <p>
                    {t('ProfilePage.Status')} <span className='status-text'>
                                        {t(`ProfilePage.status.${currentTreaty.status}`)}
                                        </span>
                </p>
                <p>{t('ProfilePage.The treaty was created at')} {format(new Date(currentTreaty.createdAt), 'dd/MM/yyyy в HH:mm:ss')}</p>
                {(currentTreaty.status === 'схвалено' || currentTreaty.status === 'виконано') &&
                    <p className='price-text'>{t('ProfilePage.Price')} {currentTreaty.price} ₴</p>
                }
            </div>
            {currentTreaty.status === 'в очікуванні' &&
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
            {currentTreaty.status === 'відхилено' &&
                <div className='treaty-expl-text-box'>
                    <p className='exp-text'>
                        {t('ProfilePage.Comment')} <br />
                        {t('ProfilePage.The treaty has been rejected')}
                    </p>
                </div>
            }
        </StyledClientTreaty>
    );
};

export default ClientTreaty;