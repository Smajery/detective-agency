import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledProfile} from './StyledProfile';
import Layout from '@/components/layout/Layout';
import {Treaty} from '@/api/treaty';
import {isEmptyArr} from '@/utils/is-empty-arr';

const Profile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false)

    const [treaties, setTreaties] = useState([])

    useEffect(() => {
        setIsLoading(true)
        Treaty.getAll()
            .then(data => {
                setTreaties(data)
            })
            .catch(e => {
                console.error(e)
            })
            .finally(() => {
                setIsLoading(true)
            })
    }, [])
    return (
        <Layout title={t('ProfilePage.title')}
                description={t('ProfilePage.dexsription')}
        >
            <StyledProfile>
                <div className='treaties-list-leftbar'>
                    <div className='title-text-box'>
                        <h3 className='title-text'
                        >
                            Ваши договора:
                        </h3>
                    </div>
                    <div className='treaties-list'>
                        {isEmptyArr(treaties) && treaties.map((treatie) => (
                            <div key={treatie.id}>
                                <p>Договір № {treatie.id} | {treatie.service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StyledProfile>
        </Layout>
    );
};

export default Profile;