import AuthProvider from '@/components/providers/AuthProvider';

const App = ({Component, pageProps}) => {
    return (
        <AuthProvider Component={Component}>

            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default App;
