import {useTranslation} from 'react-i18next';

import {StyledMessage} from './StyledMessage';
import Layout from '@/components/layout/Layout';
import {useActions} from '@/hooks/UseActions';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Message = () => {
    const {t} = useTranslation();
    const {checkAuth} = useActions();
    const {isAuth} = useSelector(state => state.authReducer)

    useEffect(() => {
        if (isAuth) return;
        checkAuth();
    }, []);

    return (
        <Layout title={t('MessagePage.title')}
                description={t('MessagePage.description')}
        >
            <StyledMessage>
                <h3>{isAuth ? (
                    t('MessagePage.Is activated')
                ) : (
                    t('MessagePage.Is not activated')
                )}</h3>
            </StyledMessage>
        </Layout>
    );
};

export default Message;