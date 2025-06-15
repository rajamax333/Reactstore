import FilterComponent from '../../components/FilterComponent/filterComponent';
import styles from './homepage.module.scss'
import Productslist from '../ProductsList/productslist';
import Infopanel from '../InfoPanel/infopanel';

function Homepage() {
  return (
    <div className={styles.homecontainer}>
      <section className={styles.mainContent}>
        <div className={styles.deskTopFilter}>
          <FilterComponent />
        </div>
        <Productslist />
        <Infopanel />
      </section>
    </div>
  )
}

export default Homepage;