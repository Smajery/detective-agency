import {useTranslation} from 'react-i18next';

import {StyledReset} from './StyledReset';
import Layout from '@/components/layout/Layout';
import ResetForm from './reset-form/ResetForm';
import Link from 'next/link';

const Reset = () => {
    const {t} = useTranslation();
    return (
        <Layout title={t('ResetPage.title')}
                description={t('ResetPage.description')}
        >
            <StyledReset>
                <div className='container'>
                    <div className='title'>
                        <h2>
                            {t("ResetPage.Don't remember your password")}
                        </h2>
                        <p>
                            {t('ResetPage.Let us know where we should send the password reset link.')}
                        </p>
                    </div>
                    <ResetForm />
                    <div className='return-text-box'>
                        <p>
                            {t('ResetPage.Or return to')} <span>
                            <Link href='/signin'>
                                {t('ResetPage.login page')}
                            </Link>
                        </span>
                        </p>
                    </div>
                </div>
            </StyledReset>
        </Layout>
    );
};

export default Reset;