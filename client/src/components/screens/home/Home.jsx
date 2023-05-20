import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledHome} from './StyledHome';

const Home = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('HomePage.title')}
                description={t('HomePage.description')}
        >
            <StyledHome>
                Home
            </StyledHome>
        </Layout>
    );
};

export default Home;
