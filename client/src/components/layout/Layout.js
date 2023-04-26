import {useEffect, useState} from 'react';

import Header from '@/components/layout/header/Header';
import Meta from '@/components/seo/Meta';
import Footer from '@/components/layout/footer/Footer';
import Main from '@/components/layout/main/Main';
import Globals from '@/styles/Globals';
import Loader from '@/components/ui/loader/Loader';
import LiftUpButton from '@/components/btns/lift-up/LiftUpButton';


const Layout = ({children, title, description}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <Meta title={title}
              description={description}
        >
            <Globals />
            {isLoading ? (
                <Loader type="page" />
            ) : (
                <>
                    <Header />
                    <Main children={children} />
                    <Footer />
                    <LiftUpButton />
                </>
            )}
        </Meta>
    );
};

export default Layout;