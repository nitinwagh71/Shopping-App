import { useContext } from "react";
import { ProductContext } from "../../context/ShopContext";
import products from "../../products/products";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // useNavigate
  const navigate = useNavigate();
  // useContext
  const { cartItems, getTotals, checkOut } = useContext(ProductContext);

  // total
  let total = getTotals();

  //Cart Empty Message
  const isCartEmpty = products.every((product) => cartItems[product.id] <= 0);

  // ui
  return (
    <div>
      <div className={styles["cart-container"]}>
        <h1 className={styles["heading-style"]}>Wecome to Cart</h1>
        {products.map((product) => {
          if (cartItems[product.id] > 0)
            return <CartItem key={product.id} product={product} />;
        })}
      </div>
      {total > 0 && (
        <>
          <div className={styles["getTCsCout-container"]}>
            <div className={styles["getTCsCout-content"]}>
              <b>Total = {total}</b>
              <div>
                <button
                  className={styles["getTCsCout-btn"]}
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </button>
                <button
                  className={styles["getTCsCout-btn"]}
                  onClick={() => {
                    navigate("/payment");
                    checkOut();
                  }}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {isCartEmpty && (
        <h1 className={styles["cart-empty-message"]}>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
