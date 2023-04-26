import {StyledMain, StyledWrapper} from './StyledMain';

const Main = ({children}) => {
    return (
        <StyledMain>
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </StyledMain>
    );
};

export default Main;