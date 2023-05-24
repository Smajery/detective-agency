import {useTranslation} from 'react-i18next';

import {StyledProfile} from './StyledProfile';
import Layout from '@/components/layout/Layout';
import ClientProfile from '@/components/screens/profile/client/ClientProfile';
import ChiefProfile from '@/components/screens/profile/chief/ChiefProfile';
import SeniorProfile from '@/components/screens/profile/senior/SeniorProfile';
import DetectiveProfile from '@/components/screens/profile/detective/DetectiveProfile';

const Profile = () => {
    const {t} = useTranslation();

    const userRole = localStorage.getItem('userRole') || sessionStorage.getItem('userRole');

    switch (userRole) {
        case 'CLIENT':
            return <ClientProfile />;
        case 'CHIEF':
            return <ChiefProfile />;
        case 'SENIOR':
            return <SeniorProfile />;
        case 'DETECTIVE':
            return <DetectiveProfile />;
        default:
            return (
                <Layout title={t('ProfilePage.title')}
                        description={t('ProfilePage.description')}
                >
                    <StyledProfile>
                        {t('ProfilePage.If you see this page, then something went wrong')}
                    </StyledProfile>
                </Layout>
            );
    }
};

export default Profile;