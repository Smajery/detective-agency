import {Provider} from 'react-redux';

import AuthProvider from '@/components/providers/AuthProvider';
import store from '@/store';
import i18n from '@/i18n';
import {useActions} from '@/hooks/UseActions';

const App = ({Component, pageProps}) => {

    return (
        <Provider store={store}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </Provider>
    );
};

export default App;
