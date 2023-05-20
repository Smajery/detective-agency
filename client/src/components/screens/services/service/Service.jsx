import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledService} from './StyledService';

const Service = () => {
    const {t} = useTranslation()

    const {query} = useRouter()

    return (
        <Layout title={t(`ServicesPage.${query.service}.title`)}
                description={t(`ServicesPage.${query.service}.description`)}
        >
            <StyledService>
                {query.service}
            </StyledService>
        </Layout>
    );
};

export default Service;