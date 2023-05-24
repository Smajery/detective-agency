import {useTranslation} from 'react-i18next';

import {StyledTypeSelect} from './StyledTypeSelect';

const TypeSelect = ({type, setType}) => {
    const {t} = useTranslation()

    const types = [
        {id: 0, value: '', title: 'Select'},
        {id: 1, value: 'Документ', title: 'Document'},
        {id: 2, value: 'Спостереження', title: 'Observation'},
        {id: 3, value: 'Експертиза', title: 'Expertise'}
    ]

    const handleSelectType = (e) => {
        setType(e.target.value)
    }
    return (
        <StyledTypeSelect value={type}
                          onChange={handleSelectType}
        >
            {types.map((type) => (
                <option value={type.value}
                        key={type.id}
                >
                    {t(`ProfilePage.DetectiveProfile.type.${type.title}`)}
                </option>
            ))}
        </StyledTypeSelect>
    );
};

export default TypeSelect;