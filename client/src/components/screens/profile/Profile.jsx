import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledProfile} from './StyledProfile';
import Layout from '@/components/layout/Layout';
import {Treaty} from '@/api/treaty';
import {isEmptyArr} from '@/utils/is-empty-arr';
import Loader from '@/components/ui/loader/Loader';
import ClientTreaty from './treaty/ClientTreaty'

const Profile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [clientTreaties, setClientTreaties] = useState([]);
    const [currentTreaty, setCurrentTreaty] = useState({});
    console.log(currentTreaty);

    useEffect(() => {
        setIsLoading(true);
        Treaty.getAll()
            .then(data => {
                setClientTreaties(data);
            })
            .catch(e => {
                console.error(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return (
        <Layout title={t('ProfilePage.title')}
                description={t('ProfilePage.dexsription')}
        >
            <StyledProfile>
                <div className='treaties-list-leftbar'>
                    <div className='leftbar-container'>
                        <div className='title-text-box'>
                            <h3 className='title-text'
                            >
                                {!isEmptyArr(clientTreaties) ? (
                                    t('ProfilePage.Treaties are empty')
                                ) : (
                                    t('ProfilePage.Treaties are not empty')
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
                                            {t('ProfilePage.Treaty')} № {treaty.id} | {t(`ProfilePage.service.${treaty.service}`)}
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
                            <ClientTreaty currentTreaty={currentTreaty}/>
                        ) : (
                            <h3>{t('ProfilePage.You have not chosen a treaty')}</h3>
                        )}
                    </div>
                </div>
            </StyledProfile>
        </Layout>
    );
};

export default Profile;