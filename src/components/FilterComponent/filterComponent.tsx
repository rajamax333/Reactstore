import { useQuery } from '@tanstack/react-query';
import SearchBar from '../SearchComponent/SearchCompoent'
import styles from './filtercomponent.module.scss'
import MinMaxInput from '../MinMaxCompo/minmaxcomp'
import { getAllCategories } from '../../service/service'
import CategoryListAndKeyWords from '../CategoryList/category';
import Resetbtn from '../RestBtn/resetbtn';
import useFilter from '../../hooks/useFilterHook/usefilter';

function FilterComponent() {
  const {filter} = useFilter();
  const {searchText,range, categories} = filter
  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
  return (
    <div className={styles.filterContainer}>
      <SearchBar />
      <section className={styles.minMaxContainer}>
        <MinMaxInput label='min' />
        <MinMaxInput label='max' />
      </section>
      <CategoryListAndKeyWords label='Categories' list={data?.data} isLoading={isLoading} isError={isError}/>
      {(searchText || range.min !== 0 ||range.max!== 1000 || categories.length > 0) && <Resetbtn />}
      {/* <CategoryListAndKeyWords label='Keywords' list={data?.data} isLoading={isLoading} isError={isError} /> */}
    </div>
  )
}

export default FilterComponent