import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ECommerceHome from "./pages/E-Commerce-home/ECommerceHome";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import DefaultLayout from "./Layout/DefaultLayout";
import AuthLayout from "./Layout/AuthLayout";
import LoginPage from "./pages/Login/LoginPage";
import WishList from "./components/wishlist/WishList";
import AddToCart from "./pages/AddtoCart/AddToCart";
import UserAccount from "./pages/UserAccount/UserAccount";
import Page404 from "./pages/Page404/Page404";

function App() {
  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("user");
    return token ? element : <Navigate to="/" />;
  };
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/home"
            element={<PrivateRoute element={<ECommerceHome />} />}
          />
          <Route
            path="/contact"
            element={<PrivateRoute element={<Contact />} />}
          />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route
            path="/wishlist"
            element={<PrivateRoute element={<WishList />} />}
          />
          <Route
            path="/addtocart"
            element={<PrivateRoute element={<AddToCart />} />}
          />
          <Route
            path="/useraccount"
            element={<PrivateRoute element={<UserAccount />} />}
          />
          <Route
            path="/errorpage"
            element={<PrivateRoute element={<Page404 />} />}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
