import {useEffect, useRef} from 'react';
import Image from 'next/image';

import {StyledDarkModeButton} from '@/components/btns/dark-mode/StyledDarkModeButton';
import {useLocaleStorage} from '@/hooks/UseLocalStorage';
import {useActions} from '@/hooks/UseActions';
import {detectDarkMode} from '@/utils/detect-dark-mode';

import lightModeImg from '@/static/dark-mode/light-mode.svg';
import darkModeImg from '@/static/dark-mode/dark-mode.svg';

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useLocaleStorage('darkMode', detectDarkMode());

    const {setIsDarkMode} = useActions();

    const btnRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const turnOnDarkMode = () => {
        if (darkMode) {
            btnRef.current.classList.add('active');
        } else {
            btnRef.current.classList.remove('active');
        }
    };

    useEffect(() => {
        turnOnDarkMode();
        setIsDarkMode(darkMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                setDarkMode(event.matches);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledDarkModeButton ref={btnRef}
                              className={'btnDarkMode'}
                              onClick={toggleDarkMode}
        >
            <Image src={lightModeImg}
                   alt="Light mode"
                   width={20}
                   height={20}
                   className='mode-icon'
            />
            <Image src={darkModeImg}
                   alt="Dark mode"
                   width={20}
                   height={20}
                   className='mode-icon'
            />
        </StyledDarkModeButton>
    );
};

export default DarkModeButton;