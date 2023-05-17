import {StyledMain} from './StyledMain';
import LiftUpBtn from '@/components/ui/buttons/lift-up/LiftUpBtn';

const Main = ({children}) => {
    return (
        <StyledMain>
            {children}
            <LiftUpBtn />
        </StyledMain>
    );
};

export default Main;