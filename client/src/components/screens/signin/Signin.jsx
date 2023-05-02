import {StyledSignin} from './StyledSignin';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import SigninForm from './signin-from/SigninForm';

const Signin = () => {
    const {t} = useTranslation();
    return (
        <Layout title={t('SigninPage.title')}
                description={t('SigninPage.description')}
        >
            <StyledSignin>
                <div className="container">
                    <div className="redirect-container">
                        <Link href={'/'}>
                            Ні, дякую
                        </Link>
                    </div>
                    <div className={'title-container'}>
                        <h1 className={'title'}>
                            Ласкаво просимо знову
                        </h1>
                    </div>
                    <div className={'signin-container'}>
                        <SigninForm />
                    </div>
                    <div className={'ask-signup-container'}>
                        <p className={'text'}>
                            Немає облікового запису? <span><Link href={'/signup'}>Зареєструватися</Link></span>
                        </p>
                    </div>
                </div>
            </StyledSignin>
        </Layout>
    );
};

export default Signin;