import {StyledMain} from './StyledMain';

const Main = ({children}) => {
    return (
        <StyledMain>
            <div className='container'>
                {children}
            </div>
        </StyledMain>
    );
};

export default Main;