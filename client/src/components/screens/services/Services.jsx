import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledServices} from './StyledServices';

const Services = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('ServicesPage.title')}
                description={t('ServicesPage.description')}
        >
            <StyledServices>
                Our services:
            </StyledServices>
        </Layout>
    );
};

export default Services;