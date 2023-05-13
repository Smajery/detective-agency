import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {StyledServices, StyledServicesList} from './StyledServices';
import {routes} from '@/routes/routes';
import {isEmptyArr} from '@/utils/is-empty-arr';
import {useEffect} from 'react';

const Services = () => {
    const {pathname, asPath} = useRouter();
    const {t} = useTranslation();

    const findCurrentPathObj = (array) => {
        return array.find((obj) => obj.path === pathname);
    };

    const services = findCurrentPathObj(isEmptyArr(routes) && routes);

    return (
        <Layout title={t('ServicesPage.title')}
                description={t('ServicesPage.description')}
        >
            {/*<StyledServices>*/}
            {/*    <StyledServicesList>*/}
            {/*        {isEmptyArr(services.subcategories) &&*/}
            {/*            services.subcategories.map((service) => (*/}
            {/*                <div id={service.anchor}*/}
            {/*                     key={service.id}*/}
            {/*                     className="service"*/}
            {/*                >*/}
            {/*                    <h1>{service.title}</h1>*/}
            {/*                    <p>*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
            {/*                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
            {/*                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute*/}
            {/*                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla*/}
            {/*                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia*/}
            {/*                        deserunt mollit anim id est laborum.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*    </StyledServicesList>*/}
            {/*</StyledServices>*/}
            <h1>Сделать подгрузку информации на основе названия услуги в пути, убрать навигацию по айди</h1>
        </Layout>
    );
};

export default Services;