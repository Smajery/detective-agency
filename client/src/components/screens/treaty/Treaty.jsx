import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledTreaty} from './StyledTreaty';
import TreatyForm from './treaty-form/TreatyForm';

const Treaty = () => {
    const {t} = useTranslation()
    return (
        <Layout title={t('TreatyPage.title')}
                description={t('TreatyPage.description')}
        >
            <StyledTreaty>
                <div className='treaty-container'>
                    <TreatyForm />
                </div>
            </StyledTreaty>
        </Layout>
    );
};

export default Treaty;