import SigninForm from './signin-from/SigninForm';
import Layout from '@/components/layout/Layout';
import {StyledSignin} from '@/components/screens/signin/StyledSignin';
import Link from 'next/link';

const Signin = () => {
    return (
        <Layout title='Sign in' description='Welcome!'>
            <StyledSignin>
                <div className='container'>
                    <div className='redirect-container'>
                        <Link href={'/'}>
                            No, thanks
                        </Link>
                    </div>
                    <div className={'title-container'}>
                        <h1 className={'title'}>
                            Welcome again
                        </h1>
                    </div>
                    {/*<div className={'decor-text-container'}>*/}
                    {/*    <div className={'decor-text-box'}>*/}
                    {/*        <h2 className={'text'}>*/}
                    {/*            Or*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'signin-container'}>
                        <SigninForm />
                    </div>
                    <div className={'ask-signup-container'}>
                        <p className={'text'}>
                            Don't have an account? <span><Link href={'/signup'}>Sign up</Link></span>
                        </p>
                    </div>
                </div>
            </StyledSignin>
        </Layout>
    );
};

export default Signin;