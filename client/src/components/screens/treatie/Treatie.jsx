import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledTreatie} from './StyledTreatie';
import TreatieForm from './treatie-form/TreatieForm';

const Treatie = () => {
    const {t} = useTranslation()
    return (
        <Layout title={t('TreatiePage.title')}
                description={t('TreatiePage.description')}
        >
            <StyledTreatie>
                <div className='treatie-container'>
                    <TreatieForm />
                </div>
            </StyledTreatie>
        </Layout>
    );
};

export default Treatie;