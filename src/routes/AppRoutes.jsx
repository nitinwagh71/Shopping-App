import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop/Shop.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";
import PaymentGateWay from "../pages/PaymentGateWay/PaymentGateWay.jsx";

// AppRoutes
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<PaymentGateWay />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
