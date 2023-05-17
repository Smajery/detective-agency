import {StyledProfile} from './StyledProfile';
import Layout from '@/components/layout/Layout';
import ClientProfile from '@/components/screens/profile/client/ClientProfile';
import ChiefProfile from '@/components/screens/profile/chief/ChiefProfile';

const Profile = () => {

    const userRole = localStorage.getItem('userRole') || sessionStorage.getItem('userRole');

    switch (userRole) {
        case 'CLIENT':
            return <ClientProfile />;
        case 'CHIEF':
            return <ChiefProfile />;
        default:
            return <Layout title={t('ProfilePage.title')}
                           description={t('ProfilePage.description')}
            >
                <StyledProfile>
                    {t('ProfilePage.If you see this page, then something went wrong')}
                </StyledProfile>
            </Layout>;
    }
};

export default Profile;