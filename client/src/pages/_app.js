import '@/styles/globals.css';
import AuthProvider from '@/components/providers/AuthProvider';

export default function App({Component, pageProps}) {
    return (
        <AuthProvider Component={Component}>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
