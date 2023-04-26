import AuthProvider from '@/components/providers/AuthProvider';
import { Provider } from 'react-redux'
import store from '@/store';

const App = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <AuthProvider Component={Component}>
                <Component {...pageProps} />
            </AuthProvider>
        </Provider>
    );
}

export default App;
