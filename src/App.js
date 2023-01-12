import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./components/NotFound";
import SubApp from "./SubApp";
import NavShop from "./components/shop/NavShop";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./components/ScrollToOnTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SubApp />}>
          <Route exact path="home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="shop" element={<ShopPage />}>
            <Route index element={<NavShop />} />
            <Route path=":category" element={<NavShop />}></Route>
          </Route>

          <Route exact path="detail/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="cart/checkout" element={<CheckoutPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
