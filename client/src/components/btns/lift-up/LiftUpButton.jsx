import {StyledLiftUpButton} from './StyledLiftUpButton';
import {useEffect, useState} from 'react';

const LiftUpButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= scrollHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, {passive: true});
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            {isVisible && (
                <StyledLiftUpButton onClick={scrollToTop}>
                    ↑
                </StyledLiftUpButton>
            )}
        </>
    );
};

export default LiftUpButton;