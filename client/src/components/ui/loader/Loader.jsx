import {StyledLoader, StyledLoadingText, StyledRoller} from './StyledLoader';

const Loader = ({type}) => {
    return (
        <StyledLoader $type={type}>
            <StyledRoller $type={type} />
            <StyledLoadingText $type={type}>
                Завантаження<span>.</span><span>.</span><span>.</span>
            </StyledLoadingText>
        </StyledLoader>
    );
};

export default Loader;