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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubApp />}>
          <Route exact path="home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="shop" element={<ShopPage />}>
            <Route index element={<NavShop />} />
            <Route path=":category" element={<NavShop />} />
          </Route>

          <Route exact path="detail/:id" element={<DetailPage />} />
          <Route exact path="cart" element={<CartPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
