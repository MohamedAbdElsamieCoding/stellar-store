import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import MainLayout from "./components/Layout/MainLayout";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
