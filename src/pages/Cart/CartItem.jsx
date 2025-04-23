import { useContext } from "react";
import styles from "./CartItem.module.css";
import { ProductContext } from "../../context/ShopContext";
const CartItem = ({ product }) => {
  // product
  let { id, productImage, productName, price } = product;

  // useContex
  let { cartItems, addToCart, removeCart, updateCart } =
    useContext(ProductContext);

  //   ui
  return (
    <div className={styles["cartItem-container"]}>
      <img
        src={productImage}
        alt={productName}
        className={styles.cartImg}
        width="200px"
      ></img>
      <div className={styles.cartInfoContainer}>
        <span className={styles.cartInfo}>{productName}</span>
        <span className={styles.cartInfo}>₹{price}</span>
      </div>
      <div>
        <button onClick={() => addToCart(id)}>+</button>
        <input
          type="number"
          value={cartItems[id]}
          onChange={(event) => updateCart(id, Number(event.target.value) || 1)}
        />
        <button onClick={() => removeCart(id)}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
