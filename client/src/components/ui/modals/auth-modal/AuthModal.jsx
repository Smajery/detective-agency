import {useTranslation} from 'react-i18next';
import {StyledAuthModal} from './StyledAuthModal';

const AuthModal = ({child, isActive, handleClose}) => {
    const {t} = useTranslation();

    return (
        <StyledAuthModal className={isActive ? 'active' : ''}>
            <button
                type="button"
                className='close-btn'
                onClick={handleClose}
            >
                х
            </button>
            {child !== '' && t(`AuthModal.${child}`)}
        </StyledAuthModal>
    );
};

export default AuthModal;