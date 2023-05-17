import Image from 'next/image';
import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledNotFound} from '@/components/screens/404/StyledNotFound';
import NotFoundImg from '@/static/404.jpeg';

const NotFound = () => {
    const {t} = useTranslation();

    return (
        <Layout title={
            typeof window === 'undefined' ? (
                '...'
            ) : (
                t('NotFoundPage.title')
            )}
                description={t('NotFoundPage.description')}
        >
            <StyledNotFound>
                <Image priority
                       src={NotFoundImg}
                       alt=""
                       width={450}
                       height={450}
                />
            </StyledNotFound>
        </Layout>
    );
};

export default NotFound;