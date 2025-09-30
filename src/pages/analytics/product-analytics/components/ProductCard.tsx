import React from "react";
import styles from '../../../../assets/scss/product-analytics.module.scss';

type ProductCardProps = {
  image: string;
  title: string;
  sku: string;
  price: string;
  offers: string;
  isPrime: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, sku, price, offers, isPrime }) => {
  return (
    <div className={styles.product_card}>
      <img src={image} alt={title} className={styles.product_image} />
      <div className={styles.product_info}>
        <div className={styles.product_sku}>{sku}</div>
        <div className={styles.product_title}>{title}</div>
        <div className={styles.product_meta}>
          <span className={styles.product_price}>{price}</span>
          <span className={styles.product_offers}>{offers}</span>
          {isPrime && <span className={styles.product_prime}>Prime</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
