import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';

function useFilter() {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();
  // Example dispatcher functions:
  const updateSearchText = (value: string) => {
    dispatch({ type:'SET_SEARCH_TEXT', value});
  };

  const updateRange = (value: { min: number; max: number }) => {
    dispatch({ type: 'SET_RANGE', value });
  };

  const updateCategories = (value: string) => {
    if(!filter.categories.includes(value)) {
      dispatch({ type: 'SET_CATEGORIES', value: [...filter.categories, value] });
    } else  {
      dispatch({ type: 'SET_CATEGORIES', value: filter.categories.filter((val) =>  val !== value) });
    }
    
  };

  const updateKeywords = (value: string) => {
    if (!filter.keywords.includes(value)) {
      dispatch({ type: 'SET_KEYWORDS', value: [...filter.keywords, value] });
    } else {
      dispatch({ type: 'SET_KEYWORDS', value: filter.keywords.filter((val) => val !== value) });
    }
  };

  const resetFilter = () => {
    dispatch({type: "RESET_FILTERS"})
  };

  return {
    filter,
    updateSearchText,
    updateRange,
    updateCategories,
    updateKeywords,
    resetFilter
  };

}

export default useFilter