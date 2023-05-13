import {useTranslation} from 'react-i18next';
import {useState} from 'react';

import {StyledServiceSelect} from './StyledServiceSelect';


const ServiceSelect = ({service, setService}) => {
    const {t} = useTranslation();

    const services = [
        {id: 1, title: 'Search', value: 'Пошук'},
        {id: 2, title: 'Adultery', value: 'Подружня зрада'},
        {id: 3, title: 'Investigation', value: 'Розслідування'},
        {id: 4, title: 'Observation', value: 'Спостереження'},
    ];

    const handleSelectService = (e) => {
        setService(e.target.value)
    }

    return (
        <StyledServiceSelect value={service}
                             onChange={handleSelectService}
        >
            <option value="">{t('TreatiePage.Select service')}</option>
            {services.map((service) => (
                <option value={service.value}
                        key={service.id}
                >
                    {t(`TreatiePage.${service.title}`)}
                </option>
            ))}
        </StyledServiceSelect>
    );
};

export default ServiceSelect;