import {StyledSortingSelect} from './StyledSortingSelect';

const SortingSelect = ({sorting, setSorting}) => {

    const sortings = [
        {id: 1, title: 'Статусу', value: 'status'}
    ]

    const handleSortingChange = (e) => {
        setSorting(e.target.value)
    }

    return (
        <StyledSortingSelect value={sorting}
                             onChange={handleSortingChange}
        >
            <option value=''>Сортировка по</option>
            {sortings.map((sorting) => (
                <option value={sorting.value}
                        key={sorting.id}
                >
                    {sorting.title}
                </option>
            ))}
        </StyledSortingSelect>
    );
};

export default SortingSelect;