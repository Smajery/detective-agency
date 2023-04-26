import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Header from '@/components/layout/header/Header';
import Meta from '@/components/seo/Meta';
import Footer from '@/components/layout/footer/Footer';
import Main from '@/components/layout/main/Main';
import Globals from '@/styles/Globals';
import Loader from '@/components/ui/loader/Loader';
import LiftUpButton from '@/components/btns/lift-up/LiftUpButton';
import {theme} from '@/utils/theme';
import {ThemeProvider} from 'styled-components';


const Layout = ({children, title, description}) => {
    const {isDarkMode} = useSelector(state => state.darkModeReducer);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <Meta title={title}
              description={description}
        >
            <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
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
            </ThemeProvider>
        </Meta>
    );
};

export default Layout;