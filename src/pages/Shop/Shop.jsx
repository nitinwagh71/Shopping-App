import products from "../../products/products";
import Product from "./Product";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <>
      <h1 className={styles.shopHeading}>Welcome to Shopping</h1>
      <div>
        <div className={`${styles["shop-container"]}`}>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
