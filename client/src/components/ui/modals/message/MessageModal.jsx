import {useTranslation} from 'react-i18next';
import {StyledMessageModal} from './StyledMessageModal';

const MessageModal = ({child, isActive, handleClose}) => {
    const {t} = useTranslation();

    return (
        <StyledMessageModal className={isActive ? 'active' : ''}>
            <button
                type="button"
                className='close-btn'
                onClick={handleClose}
            >
                х
            </button>
            <p>
                {child !== '' && t(`MessageModal.${child}`)}
            </p>
        </StyledMessageModal>
    );
};

export default MessageModal;