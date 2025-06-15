import styles from './InfoPanel.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getTopSellers } from '../../service/service';
import LazyLoadWrapper from '../../components/LazyLoadWrapper/lazyloadwrapper';
import UserCard from '../../components/UsersCard/userscard';
import Skeleton from '@mui/material/Skeleton';
import type { TopSeller } from '../../components/UsersCard/usercard.types';

function Infopanel() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: getTopSellers,
  });

  const users = data?.data?.users ?? [];

  if (isLoading) {
    return (
      <div className={styles.infoPanelcontainer}>
        <h2>Top Sellers</h2>
        <div className={styles.userCardWrapper}>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className={styles.userCard}>
              <Skeleton variant="circular" width={30} height={30} />
              <Skeleton width={200} height={40} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (isError) return <div>Something went wrong.</div>;

  return (
    <div className={styles.infoPanelcontainer}>
      <h2>Top Sellers</h2>
      <div className={styles.userCardWrapper}>
        {users.map(({ id, firstName,lastName, image }: TopSeller, index: number) => (
          <div key={id || index} className={styles.userCard}>
            <LazyLoadWrapper>
              <UserCard name={firstName + " " + lastName} image={image} />
            </LazyLoadWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infopanel;
