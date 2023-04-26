import Layout from '@/components/layout/Layout';
import {StyledServices, StyledServicesList} from './StyledServices';
import {routes} from '@/utils/nav-routes';
import {isEmptyArr} from '@/utils/is-empty-arr';
import {useRouter} from 'next/router';

const Services = () => {
    const {pathname} = useRouter();

    const findCurrentPathObj = (array) => {
        return array.find((obj) => obj.path === pathname);
    };

    const services = findCurrentPathObj(isEmptyArr(routes) && routes);

    return (
        <Layout title="Services"
                description="We love our customers"
        >
            <StyledServices>
                <StyledServicesList>
                    {isEmptyArr(services.subcategories) &&
                        services.subcategories.map((service) => (
                            <div id={service.anchor}
                                 key={service.id}
                                 className="service"
                            >
                                <h1>{service.title}</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        ))}
                </StyledServicesList>
            </StyledServices>
        </Layout>
    );
};

export default Services;