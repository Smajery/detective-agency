import {useTranslation} from 'react-i18next';

import {StyledSortingSelect} from './StyledSortingSelect';

const SortingSelect = ({sorting, setSorting}) => {

    const {t} = useTranslation()

    const sortings = [
        {id: 1, title: 'Status', value: 'status'},
        {id: 2, title: 'Descending date', value: 'created_at_desc'},
        {id: 3, title: 'Ascending date', value: 'created_at_asc'},
        {id: 4, title: 'Descending payment', value: 'payment_desc'},
        {id: 5, title: 'Ascending payment', value: 'payment_asc'},
    ]

    const handleSortingChange = (e) => {
        setSorting(e.target.value)
    }

    return (
        <StyledSortingSelect value={sorting}
                             onChange={handleSortingChange}
        >
            <option value=''>
                {t(`ProfilePage.ChiefProfile.sorting.Sorting by`)}
            </option>
            {sortings.map((sorting) => (
                <option value={sorting.value}
                        key={sorting.id}
                >
                    {t(`ProfilePage.ChiefProfile.sorting.${sorting.title}`)}
                </option>
            ))}
        </StyledSortingSelect>
    );
};

export default SortingSelect;