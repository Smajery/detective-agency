import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {StyledSubnavbarItem} from './StyledSubnavbarItem';

const SubnavbarItem = ({subcategory, route}) => {
    const {t} = useTranslation();

    return (
        <StyledSubnavbarItem className="subnavbar__item">
            <Link href={`${subcategory.path}`}
                  scroll={false}
                  className="subnavbar-a"
            >
                {t(`header.subbar.${route.title}.${subcategory.title}`)}
            </Link>
        </StyledSubnavbarItem>
    );
};

export default SubnavbarItem;