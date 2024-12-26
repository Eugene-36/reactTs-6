import { useAppDispatch, useAppSelector } from './redux/hooks';

import { selectNameFilter } from './redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filters.status);
  return (
    <div className='search-input'>
      <label htmlFor=''>Search by name</label>
      <input
        type='text'
        value={searchValue}
        onChange={(e) => dispatch(selectNameFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
