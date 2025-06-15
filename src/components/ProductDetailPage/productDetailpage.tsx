import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './productDetailpage.module.scss';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

const ProductDetails: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.error('Failed to load product:', e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (isError || !product) return <div className={styles.error}>Product not found.</div>;

  return (
    <div className={styles.productDetails}>
      <h2>{product.title}</h2>
      <div className={styles.thumbnailWrapper}>
        {!imageLoaded && <div className={styles.imageSkeleton} />}
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.thumbnail}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          // loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.price}>
        <strong>Price:</strong> ${product.price.toFixed(2)}
        <span className={styles.discount}>-{product.discountPercentage}%</span>
      </div>
      <div>Rating: ⭐ {product.rating} / 5</div>
      <div>Stock: {product.stock}</div>
      <div>Brand: {product.brand}</div>

      <Link to="/home" className={styles.backLink} >
        ⬅ Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;
