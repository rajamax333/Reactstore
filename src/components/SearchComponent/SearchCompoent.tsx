import { InputBase } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';
import useFilter from '../../hooks/useFilterHook/usefilter';

const SearchBar = () => {
  const { updateSearchText, filter } = useFilter();
  const { searchText } = filter;
  const [query, setquery] = useState(searchText)

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if(!searchText) {
      setquery('')
    }
  },[searchText])

  const debouncedUpdate = useCallback((value: string) => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      updateSearchText(value);
    }, 500);
  }, [updateSearchText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setquery(value)
    debouncedUpdate(value);
  };

  return (
    <div
      className={styles.searchProducts}
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '4px 8px',
      }}
    >
      <InputBase
        style={{ flex: 1, marginLeft: 8 }}
        placeholder="Search…"
        value={query}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;
