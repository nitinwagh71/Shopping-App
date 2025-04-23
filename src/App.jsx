import Navbar from "./components/Navbar/Navbar";
import ShopContext from "./context/ShopContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <ShopContext />
      <AppRoutes />
    </>
  );
};

export default App;
