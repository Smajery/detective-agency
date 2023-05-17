import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledCitySelect} from './StyledCitySelect';

const CitySelect = ({place, setPlace}) => {
    const {t} = useTranslation();

    const cities = [
        {id: 1, title: 'Odesa', value: 'Одеса'},
        {id: 2, title: 'Kyiv', value: 'Київ'},
        {id: 3, title: 'Donetsk', value: 'Донецьк'},
    ];

    const handleSelectCity = (e) => {
        setPlace(e.target.value)
    }

    return (
        <StyledCitySelect value={place}
                          onChange={handleSelectCity}
        >
            <option value=''>{t('TreatyPage.Select city')}</option>
            {cities.map((service) => (
                <option value={service.value}
                        key={service.id}
                >
                    {t(`TreatyPage.${service.title}`)}
                </option>
            ))}
        </StyledCitySelect>
    );
};

export default CitySelect;