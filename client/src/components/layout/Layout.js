import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import {ThemeProvider} from 'styled-components';

import Header from '@/components/layout/header/Header';
import Meta from '@/components/seo/Meta';
import Footer from '@/components/layout/footer/Footer';
import Main from '@/components/layout/main/Main';
import Loader from '@/components/ui/loader/Loader';

import {shouldDisplayFooter, shouldDisplayHeader} from '@/utils/is-display';
import Globals from '@/styles/Globals';
import {theme} from '@/utils/theme';
import {useActions} from '@/hooks/UseActions';
import {useLocaleStorage} from '@/hooks/UseLocalStorage';
import {detectDarkMode} from '@/utils/detect-dark-mode';


const Layout = ({children, title, description}) => {
    const {pathname} = useRouter();
    const {isDarkMode} = useSelector(state => state.darkModeReducer);
    const {setIsDarkMode} = useActions()

    const [darkMode, setDarkMode] = useLocaleStorage('darkMode', detectDarkMode());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsDarkMode(darkMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [darkMode]);

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
                        {shouldDisplayHeader(pathname) && (
                            <Header />
                        )}
                        <Main children={children} />
                        {shouldDisplayFooter(pathname) && (
                            <Footer />
                        )}
                    </>
                )}
            </ThemeProvider>
        </Meta>
    );
};

export default Layout;