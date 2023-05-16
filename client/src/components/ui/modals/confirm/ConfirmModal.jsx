import {useTranslation} from 'react-i18next';

import {StyledConfirmModal} from './StyledConfirmModal';

const ConfirmModal = ({child, isActive, handleClose, handleConfirm}) => {
    const {t} = useTranslation()

    return (
        <StyledConfirmModal className={isActive ? 'active' : ''}>
            <button
                type="button"
                className='close-btn'
                onClick={handleClose}
            >
                х
            </button>
            <p>
                {child !== '' && t(`ConfirmModal.${child}`)}
            </p>
            <div className='confirm-btn-box'>
                <button onClick={() => handleConfirm(false)}
                        className='cancel-btn'
                >
                    {t('ConfirmModal.Cancel')}
                </button>
                <button onClick={() => handleConfirm(true)}
                        className='confirm-btn'
                >
                    {t('ConfirmModal.Confirm')}
                </button>
            </div>
        </StyledConfirmModal>
    );
};

export default ConfirmModal;