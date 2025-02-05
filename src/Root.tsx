import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomaPage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import MyAccauntPage from "./pages/MyAccauntPage/MyAccauntPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="products" element={<ProductPage />} />
        <Route path="account" element={<MyAccauntPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
