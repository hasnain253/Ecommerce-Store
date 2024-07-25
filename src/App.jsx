import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ECommerceHome from "./pages/E-Commerce-home/ECommerceHome";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import DefaultLayout from "./Layout/DefaultLayout";
import AuothLayout from "./Layout/AuothLayout";
import LoginPage from "./pages/Login/LoginPage";
import WishList from "./components/wishlist/WishList";
import AddToCart from "./pages/AddtoCart/AddToCart";

function App() {
  const PrivateRoute = ({ element }) => {
    const token = JSON.parse(localStorage.getItem("user"));
    return token?.email ? element : <Navigate to="/" />;
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
        </Route>
        <Route element={<AuothLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
