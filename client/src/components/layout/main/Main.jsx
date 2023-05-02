import {StyledMain, StyledWrapper} from './StyledMain';
import LiftUpBtn from '@/components/ui/buttons/lift-up/LiftUpBtn';

const Main = ({children}) => {
    return (
        <StyledMain>
            <StyledWrapper>
                {children}
                <LiftUpBtn />
            </StyledWrapper>
        </StyledMain>
    );
};

export default Main;