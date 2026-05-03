import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import MainLayout from "./components/Layout/MainLayout";
import ShopPage from "./components/ShopPage/ShopPage";
import Deals from "./components/DealsPage/Deals";
import NewArrivals from "./components/NewArrivalsPage/NewArrivals";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ShopPage />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/arrivals" element={<NewArrivals />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
