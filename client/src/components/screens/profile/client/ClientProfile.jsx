import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

import Layout from '@/components/layout/Layout';
import {StyledClientProfile} from './StyledClientProfile';
import {isEmptyArr} from '@/utils/is-empty-arr';
import Loader from '@/components/ui/loader/Loader';
import ClientTreaty from './treaty/ClientTreaty';
import {Treaty} from '@/api/treaty';

const ClientProfile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [clientTreaties, setClientTreaties] = useState([]);
    const [currentTreaty, setCurrentTreaty] = useState({});

    useEffect(() => {
        setIsLoading(true);
        Treaty.getAll()
            .then(data => {
                setClientTreaties(data);
            })
            .catch(e => {
                console.error(e.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentTreaty]);
    return (
        <Layout title={t('ProfilePage.title')}
                description={t('ProfilePage.description')}
        >
            <StyledClientProfile>
                <div className='treaties-list-leftbar'>
                    <div className='leftbar-container'>
                        <div className='title-text-box'>
                            <h3 className='title-text'
                            >
                                {!isEmptyArr(clientTreaties) ? (
                                    t('ProfilePage.ClientProfile.Treaties are empty')
                                ) : (
                                    t('ProfilePage.ClientProfile.Treaties are not empty')
                                )}
                            </h3>
                        </div>
                        <div className='treaties-list'>
                            {isLoading ? (
                                <Loader type={'treaties-list'} />
                            ) : (
                                isEmptyArr(clientTreaties) && clientTreaties.map((treaty) => (
                                    <div key={treaty.id}
                                         onClick={() => setCurrentTreaty(treaty)}
                                         className='treaty-title-text-box'
                                    >
                                        <p className={currentTreaty.id === treaty.id ? 'active' : ''}>
                                            {t('ProfilePage.ClientProfile.Treaty')} № {treaty.id} | {t(`ProfilePage.ClientProfile.service.${treaty.service}`)}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <div className='treaty-rightbar'>
                    <div className='rightbar-container'>
                        {Object.keys(currentTreaty).length !== 0 ? (
                            <ClientTreaty treaty={currentTreaty}
                                          setTreaty={setCurrentTreaty}
                            />
                        ) : (
                            <h3>{t('ProfilePage.ClientProfile.You have not chosen a treaty')}</h3>
                        )}
                    </div>
                </div>
            </StyledClientProfile>
        </Layout>
    );
};

export default ClientProfile;