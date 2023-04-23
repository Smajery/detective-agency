import {Inter} from 'next/font/google';
import Layout from '@/components/layout/Layout';

const inter = Inter({subsets: ['latin']});

const Home = () => {
    return (
        <Layout title='Home' description='Hello, our lovely customers!'>
            Home page
        </Layout>
    );
};

export default Home;
