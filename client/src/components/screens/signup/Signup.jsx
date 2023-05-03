import Link from 'next/link';
import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledSignup} from './StyledSignup';
import SignupForm from '@/components/screens/signup/signup-form/SignupForm';

const Signup = () => {
    const {t} = useTranslation();
    return (
        <Layout title={t('SignupPage.title')}
                description={t('SignupPage.description')}
        >
            <StyledSignup>
                <div className="container">
                    <div className="redirect-container">
                        <Link href={'/'}>
                            {t('SignupPage.No, thanks')}
                        </Link>
                    </div>
                    <div className={'title-container'}>
                        <h1 className={'title'}>
                            {t('SignupPage.Welcome')}
                        </h1>
                    </div>
                    <div className={'signin-container'}>
                        <SignupForm />
                    </div>
                    <div className={'ask-signin-container'}>
                        <p className={'text'}>
                            {t('SignupPage.Do you have an account')}
                            <span><Link href={'/signin'}>{t('SignupPage.Sign in')}</Link></span>
                        </p>
                    </div>
                </div>
            </StyledSignup>
        </Layout>
    );
};

export default Signup;