import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledHelp} from './StyledHelp';

const Help = () => {
    const {t} = useTranslation();
    return (
        <Layout title={t('HelpPage.title')}
                description={t('HelpPage.description')}
        >
            <StyledHelp>

            </StyledHelp>
        </Layout>
    );
};

export default Help;