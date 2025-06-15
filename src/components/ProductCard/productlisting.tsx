import React, { useState } from 'react';
import styles from './products.module.scss';
import type { Product } from './product.types';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/product/${product.id}`)}>
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

      <div className={styles.details}>
        <h2>{product.title}</h2>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.priceBlock}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span className={styles.discount}>-{product.discountPercentage}%</span>
        </div>
        <div className={styles.rating}>⭐ {product.rating} / 5</div>
        <div className={styles.meta}>
          <span>Stock: {product.stock}</span>
          <span>{product.availabilityStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
