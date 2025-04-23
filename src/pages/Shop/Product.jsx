import { useContext } from "react";
import styles from "./Product.module.css";
import { ProductContext } from "../../context/ShopContext";
const Product = ({ product }) => {
  // products
  const { id, productImage, productName, price } = product;

  let { addToCart, cartItems } = useContext(ProductContext);

  // ui
  return (
    <div className={styles["product-style"]}>
      <img
        src={productImage}
        alt={productName}
        className={styles["image-style"]}
        width="200px"
      ></img>
      <div className={styles.infoContainer}>
        <div>
          <span className={styles["info-style"]}>{productName}</span>
          <span className={styles["info-style"]}>₹{price}</span>
        </div>
        <div>
          <button className={styles["btn-style"]} onClick={() => addToCart(id)}>
            Add Cart {cartItems[id] > 0 && cartItems[id]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
