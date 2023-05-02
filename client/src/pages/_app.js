import AuthProvider from '@/components/providers/AuthProvider';
import {Provider} from 'react-redux';
import store from '@/store';
import i18n from '@/i18n';

const App = ({Component, pageProps}) => {
    


    return (
        <Provider store={store}>
            <AuthProvider Component={Component}>
                <Component {...pageProps} />
            </AuthProvider>
        </Provider>
    );
};

export default App;
