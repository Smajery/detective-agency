import {useTranslation} from 'react-i18next';
import {useState} from 'react';

import {StyledTreatyForm} from '@/components/screens/treaty/treaty-form/StyledTreatyForm';
import ServiceSelect from './service-select/ServiceSelect';
import CitySelect from '@/components/screens/treaty/treaty-form/city-select/CitySelect';
import {Treaty} from '@/api/treaty';
import Loader from '@/components/ui/loader/Loader';
import MessageModal from '@/components/ui/modals/message-modal/MessageModal';


const TreatyForm = () => {
    const {t} = useTranslation();

    const [service, setService] = useState('');
    const [serviceError, setServiceError] = useState('');

    const [clientInfo, setClientInfo] = useState('');
    const [clientInfoError, setClientInfoError] = useState('');

    const [place, setPlace] = useState('');
    const [placeError, setPlaceError] = useState('');

    const [isAgree, setIsAgree] = useState(false);
    const [isAgreeError, setIsAgreeError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const maxChars = 200;
    const [remainingChars, setRemainingChars] = useState(maxChars);

    const handleClientInfo = (e) => {
        const value = e.target.value;
        setClientInfo(e.target.value);
        setRemainingChars(maxChars - value.length);
    };

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof window === 'undefined') return;

        let clientInfoError = '';
        let placeError = '';
        let serviceError = '';
        let isAgreeError = '';

        if (clientInfo === '') {
            clientInfoError = 'Client info is empty';
        }
        if (place === '') {
            placeError = 'Place is empty';
        }
        if (service === '') {
            serviceError = 'Service is empty';
        }
        if (!isAgree) {
            isAgreeError = 'Agree is empty';
        }

        setClientInfoError(clientInfoError);
        setPlaceError(placeError);
        setServiceError(serviceError);
        setIsAgreeError(isAgreeError)

        if (isAgreeError !== '' && serviceError !== '' && clientInfoError !== '' && placeError !== '') return;

        setIsLoading(true);
        Treaty.create(service, clientInfo, place)
            .then(() => {
                setService('');
                setClientInfo('');
                setPlace('');
                setIsAgree(false)
                setRemainingChars(maxChars)

                setMessageModalText('The treaty has been successfully created');
                setIsMessageModal(true)
            })
            .catch(e => {
                setMessageModalText(e.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <StyledTreatyForm onSubmit={handleSubmit}>
            <div className='treaty-title-box'>
                <h3>{t('TreatyPage.Treaty')}</h3>
            </div>
            <div className='infoarea-box'>
                <textarea id='client-infoarea'
                          className='client-infoarea'
                          value={clientInfo}
                          onChange={handleClientInfo}
                          maxLength={maxChars}
                          placeholder={t('TreatyPage.Enter your info here')}
                />
                <label htmlFor='client-infoarea'
                       className='infoarea-label'
                >
                    {t('TreatyPage.Remaining characters')}
                    <span className={remainingChars === 0 ? 'remaining-chars zero' : 'remaining-chars'}
                    >
                        {remainingChars}
                        </span>
                    /{maxChars}
                </label>
                {clientInfoError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`TreatyPage.${clientInfoError}`)}
                        </p>
                    </div>
                )}
            </div>
            <div className='select-box'>
                <CitySelect place={place}
                            setPlace={setPlace}
                />
                {placeError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`TreatyPage.${placeError}`)}
                        </p>
                    </div>
                )}
                <ServiceSelect service={service}
                               setService={setService}
                />
                {serviceError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`TreatyPage.${serviceError}`)}
                        </p>
                    </div>
                )}
            </div>
            <div className='treaty-expl-text-box'>
                <p className='exp-text'>
                    <span className='ps-text'>
                        {t('TreatyPage.Note')}
                    </span><br />
                    • {t('TreatyPage.After sending the treaty')}<br />
                    • {t('TreatyPage.After approved')}
                </p>
            </div>
            <div className='agree-box'>
                <input checked={isAgree}
                       onChange={e => setIsAgree(e.target.checked)}
                       type='checkbox'
                       id='agree-checkbox'
                />
                <label htmlFor='agree-checkbox'
                       className='agree-text'
                >
                    {t('TreatyPage.I agree')}
                </label>
            </div>
            {isAgreeError !== '' && (
                <div className='error-text-box'>
                    <p className='error-text'>
                        {t(`TreatyPage.${isAgreeError}`)}
                    </p>
                </div>
            )}
            <button type='submit'
                    className='submit-btn'
            >
                {isLoading ? (
                    <Loader />
                ) : (
                    t('TreatyPage.Submit')
                )}
            </button>
            <div className='treaty-pd-text-box'>
                <p className='pd-text'>
                    {t('TreatyPage.Submit privacity')}<br />
                    <span className='privacy-text'>
                        {t('TreatyPage.Personal information privacity')}
                    </span>
                </p>
            </div>
            <MessageModal child={messageModalText}
                          isActive={isMessageModal}
                          handleClose={handleCloseMessageModal}
            />
        </StyledTreatyForm>
    );
};

export default TreatyForm;