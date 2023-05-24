import {Document} from '@/api/document';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledDocumentModal, StyledForm} from './StyledDocumentModal';
import TypeSelect from './type-select/TypeSelect';

const DocumentModal = ({isActive, setIsActive, caseId}) => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState('');
    const [typeError, setTypeError] = useState('')

    const [result, setResult] = useState('');
    const [resultError, setResultError] = useState('')

    const [files, setFiles] = useState([]);
    const [filesError, setFilesError] = useState('')


    const maxChars = 200;
    const [remainingChars, setRemainingChars] = useState(maxChars);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleResult = (e) => {
        const value = e.target.value;
        setResult(e.target.value);
        setRemainingChars(maxChars - value.length);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTypeError = '';
        let newResultError = '';
        let newFilesError = '';

        if (type === '') {
            newTypeError = 'Type is empty'
        }
        if (result === '') {
            newResultError = 'Result is empty'
        }
        if (files.length === 0) {
            newFilesError = 'Files are empty'
        }

        setTypeError(newTypeError);
        setResultError(newResultError);
        setFilesError(newFilesError);

        if (newTypeError !== '' || newResultError !== '' || newFilesError !== '') return;

        setIsLoading(true);
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        formData.append('type', type);
        formData.append('result', result);
        formData.append('caseId', caseId);
        Document.create(formData)
            .then(() => {
                setIsActive(false);
            })
            .catch(e => {
                console.error(e.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleCloseModal = () => {
        setIsActive(false);
    };

    return (
        <StyledDocumentModal className={isActive ? 'active' : ''}
                             onClick={handleCloseModal}
        >
            <StyledForm onSubmit={handleSubmit}
                        onClick={e => {
                            e.stopPropagation();
                        }}
            >
                <div className='document-title'>
                    <h3>
                        {type !== '' ? (
                            type
                        ) : (
                            'Вы не выбрали тип документа'
                        )}
                    </h3>
                </div>
                <div className='selecting-type-container'>
                    <p>
                        Тип документа:
                    </p>
                    <TypeSelect type={type}
                                setType={setType}
                    />
                </div>
                {typeError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`ProfilePage.DetectiveProfile.error.${typeError}`)}
                        </p>
                    </div>
                )}
                <div className='infoarea-box'>
                    <label htmlFor='result-infoarea'
                           className='result-title'
                    >
                        Результат:
                    </label>
                    <textarea id='result-infoarea'
                              className='result-infoarea'
                              value={result}
                              onChange={handleResult}
                              maxLength={maxChars}
                              placeholder={t('TreatyPage.Enter your info here')}
                    />
                    <label htmlFor='result-infoarea'
                           className='infoarea-label'
                    >
                        {t('TreatyPage.Remaining characters')}
                        <span className={remainingChars === 0 ? 'remaining-chars zero' : 'remaining-chars'}
                        >
                        {remainingChars}
                        </span>
                        /{maxChars}
                    </label>
                </div>
                {resultError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`ProfilePage.DetectiveProfile.error.${resultError}`)}
                        </p>
                    </div>
                )}
                <div className='selecting-files-container'>
                    <label htmlFor='file'
                           className='files-title'
                    >
                        Выберите файлы:
                    </label>
                    <input type='file'
                           id='file'
                           name='file'
                           className='files-input'
                           multiple
                           onChange={handleFileChange}
                    />
                </div>
                {filesError !== '' && (
                    <div className='error-text-box'>
                        <p className='error-text'>
                            {t(`ProfilePage.DetectiveProfile.error.${filesError}`)}
                        </p>
                    </div>
                )}
                <button>
                    Отправить
                </button>
            </StyledForm>
        </StyledDocumentModal>
    );
};

export default DocumentModal;