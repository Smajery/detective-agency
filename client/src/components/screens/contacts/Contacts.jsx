import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';

const Contacts = () => {
    const {t} = useTranslation()

    return (
        <Layout title={t('ContactsPage.title')}
                description={t('ContactsPage.description')}
        >
            Contacts
        </Layout>
    );
};

export default Contacts;