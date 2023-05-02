import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';

const Home = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('HomePage.title')}
                description={t('HomePage.description')}
        >
            Home page
        </Layout>
    );
};

export default Home;
