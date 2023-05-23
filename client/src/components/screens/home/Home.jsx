import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledHome} from './StyledHome';

const Home = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('HomePage.title')}
                description={t('HomePage.description')}
        >
            <StyledHome>
                <div className='home-page-container'>
                    <div className='about-text-container'>
                        <h2>
                            {t("HomePage.about-text.Welcome to «Dirk Gently's» Detective Agency")}
                        </h2>
                        <br/>
                        <p>
                            {t('HomePage.about-text.We are a team of experienced and highly qualified detectives')}
                        </p>
                        <br/>
                        <p>
                            {t('HomePage.about-text.Our agency is based on the principles of professionalism, confidentiality, and efficiency.')}
                        </p>
                        <br/>
                        <p>
                            {t('HomePage.about-text.Our team consists of professionals with extensive experience in law enforcement agencies, military services, and the private sector.')}
                        </p>
                        <br/>
                        <p>
                            {t('HomePage.about-text.When you come to us, you not only gain access to the experience and expertise of our team but also a partnership built on trust and understanding.')}
                        </p>
                        <br/>
                        <p>
                            {t('HomePage.about-text.Our goal is to provide you with all the necessary information that will help you make informed decisions.')}
                        </p>
                        <br/>
                        <p>
                            {t('HomePage.about-text.If you are looking for a reliable and professional detective agency')}
                        </p>
                    </div>
                </div>
            </StyledHome>
        </Layout>
    );
};

export default Home;
