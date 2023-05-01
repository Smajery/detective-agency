import {StyledMain, StyledWrapper} from './StyledMain';
import LiftUpButton from '@/components/btns/lift-up/LiftUpButton';

const Main = ({children}) => {
    return (
        <StyledMain>
            <StyledWrapper>
                {children}
                <LiftUpButton />
            </StyledWrapper>
        </StyledMain>
    );
};

export default Main;