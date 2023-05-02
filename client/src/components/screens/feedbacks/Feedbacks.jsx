import Layout from '@/components/layout/Layout';
import {useTranslation} from 'react-i18next';

const Feedbacks = () => {
    const {t} = useTranslation();
    return (
            <Layout title={t('FeedbacksPage.title')}
                description={t('FeedbacksPage.description')}
        >
            Feedbacks
        </Layout>
    );
};

export default Feedbacks;