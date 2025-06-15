import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState, useMemo } from 'react';
import styles from './productslist.module.scss';
import type { RootState } from '../../store/store';
import type { Product } from '../../components/ProductCard/product.types';
import ProductCard from '../../components/ProductCard/productlisting';
import LazyLoadWrapper from '../../components/LazyLoadWrapper/lazyloadwrapper';
import { fetchProducts } from './productslist.actionHandler';
import Loader from '../../components/InfiniteLoader/InfiniteLoader';

const LIMIT = 30;

function ProductsList() {
  const { categories, searchText,range } = useSelector((state: RootState) => state.filter);
  const {min,max = Infinity} = range;
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const params = useMemo(() => ({
    limit: LIMIT.toString(),
    skip: page.toString(),
  }), [page]);
  

  const queryKey = useMemo(() => ['products', page], [page]);

  useEffect(() => {
    setPage(0);
    setProducts([]);
    setHasMore(true);
  }, [categories]);

  const { data: allProducts = [], isLoading, isError } = useQuery<Product[]>({
    queryKey,
    queryFn: () => fetchProducts(params),
    enabled: hasMore,
  });

  useEffect(() => {
    if (allProducts.length > 0) {
      setProducts(prev => [...prev, ...allProducts]);
      if (allProducts.length < LIMIT) {
        setHasMore(false);
      }
    }
  }, [allProducts]);

  useEffect(() => {
    if (!loaderRef.current || isLoading || !hasMore) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage(prev => prev + LIMIT);
      }
    }, {
      rootMargin: '200px',
      threshold: 0,
    });

    const node = loaderRef.current;
    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [hasMore, isLoading, page]);

  const filteredProducts = products.filter(({ title, price,category }) => {
    const matchesSearch = searchText
      ? title.toLowerCase().includes(searchText.toLowerCase())
      : true;

    const matchesPrice =
      (min !== undefined && max !== undefined)
        ? price >= min && price <= max
        : true;

    const matchedCategories = categories.length ? categories.includes(category): true

    return matchesSearch && matchesPrice && matchedCategories;
  });
  

  if (isError) return <div>Something went wrong...</div>;

  return (
    <div className={styles.productsContainers}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <LazyLoadWrapper key={product.id} threshold={0.2}>
            <ProductCard product={product} />
          </LazyLoadWrapper>
        ))
      ) : (
        <div className={styles.emptyState}>
          <h3>No matching products found</h3>
          <p>Try adjusting your filters or search keywords.</p>
        </div>
      )}

      {hasMore && !isLoading && (
        <div ref={loaderRef} style={{ height: '100px' }}>
          <Loader />
        </div>
      )}
    </div>
  );
  
}

export default ProductsList;
