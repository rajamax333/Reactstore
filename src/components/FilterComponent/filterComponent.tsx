import { useQuery } from '@tanstack/react-query';
import SearchBar from '../SearchComponent/SearchCompoent'
import styles from './filtercomponent.module.scss'
import MinMaxInput from '../MinMaxCompo/minmaxcomp'
import { getAllCategories } from '../../service/service'
import CategoryListAndKeyWords from '../CategoryList/category';
import Resetbtn from '../RestBtn/resetbtn';

function FilterComponent() {
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
      <Resetbtn />
      {/* <CategoryListAndKeyWords label='Keywords' list={data?.data} isLoading={isLoading} isError={isError} /> */}
    </div>
  )
}

export default FilterComponent