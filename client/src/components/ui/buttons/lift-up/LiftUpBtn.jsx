import {StyledLiftUpBtn} from './StyledLiftUpBtn';
import {useEffect, useState} from 'react';

const LiftUpBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        const isPageLongEnough = scrollHeight > windowHeight;

        setIsVisible(isPageLongEnough && scrollTop > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, {passive: true});

            return () => window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <>
            {isVisible && (
                <StyledLiftUpBtn onClick={scrollToTop}>
                    ↑
                </StyledLiftUpBtn>
            )}
        </>
    );
};

export default LiftUpBtn;