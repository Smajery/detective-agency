import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

import Layout from '@/components/layout/Layout';
import {StyledClientProfile} from './StyledClientProfile';
import {isEmptyArr} from '@/utils/is-empty-arr';
import Loader from '@/components/ui/loader/Loader';
import ClientTreaty from './treaty/ClientTreaty';
import {Treaty} from '@/api/treaty';
import TreatyForm from './treaty-form/TreatyForm';

const ClientProfile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [clientTreaties, setClientTreaties] = useState([]);
    const [currentTreaty, setCurrentTreaty] = useState({});

    const [isShowTreatyForm, setIsShowTreatyForm] = useState(false);

    const handleCreateTreaty = () => {
        setIsShowTreatyForm(true);
    };
    const handleCloseTreaty = () => {
        setIsShowTreatyForm(false);
    };

    const handleSelectTreaty = (treaty) => {
        setIsShowTreatyForm(false);
        setCurrentTreaty(treaty);
    };

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
    }, [currentTreaty, isShowTreatyForm]);

    return (
        <Layout title={t('ProfilePage.title')}
                description={t('ProfilePage.description')}
        >
            <StyledClientProfile>
                <div className='treaties-list-leftbar'>
                    <div className='leftbar-container'>
                        <div className='title-text-box'>
                            <p className='title-text'>
                                {t('ProfilePage.ClientProfile.Treaties are not empty')}
                            </p>
                            <button className='create-treaty-btn'
                                    onClick={handleCreateTreaty}
                            >
                                {t('ProfilePage.ClientProfile.Create')}
                            </button>
                        </div>
                        <div className='treaties-list'>
                            {isLoading ? (
                                <Loader type={'treaties-list'} />
                            ) : (
                                isEmptyArr(clientTreaties) && clientTreaties.map((treaty) => (
                                    <div key={treaty.id}
                                         onClick={() => handleSelectTreaty(treaty)}
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
                        {isShowTreatyForm ? (
                            <TreatyForm handleCloseTreaty={handleCloseTreaty} />
                        ) : (
                            Object.keys(currentTreaty).length !== 0 ? (
                                <ClientTreaty treaty={currentTreaty}
                                              setTreaty={setCurrentTreaty}
                                />
                            ) : (
                                <p>
                                    {isEmptyArr(clientTreaties) ? (
                                        t('ProfilePage.ClientProfile.You have not chosen a treaty')
                                    ) : (
                                        t('ProfilePage.ClientProfile.Treaties are empty')
                                    )}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </StyledClientProfile>
        </Layout>
    );
};

export default ClientProfile;