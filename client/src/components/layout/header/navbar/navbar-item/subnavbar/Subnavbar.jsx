import {StyledSubNavbar} from './StyledSubnavbar';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import SubnavbarItem from './subnavbar-item/SubnavbarItem';

const Subnavbar = ({route}) => {
    const {t} = useTranslation();

    return (
        <StyledSubNavbar>
            {route.subcategories.map((subcategory) => (
                <SubnavbarItem subcategory={subcategory} route={route} key={subcategory.id} />
            ))}
        </StyledSubNavbar>
    );
};

export default Subnavbar;