import {StyledMessage} from './StyledMessage';
import Layout from '@/components/layout/Layout';
import {useTranslation} from 'react-i18next';

const Message = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('MessagePage.title')}
                description={t('MessagePage.description')}
        >
            <StyledMessage>
                <h3>{t("MessagePage.Is activated")}</h3>
            </StyledMessage>
        </Layout>
    );
};

export default Message;