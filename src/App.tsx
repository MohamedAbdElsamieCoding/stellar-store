import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import MainLayout from "./components/Layout/MainLayout";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import ProductDetailsPage from "./components/ProductDetails/ProductDetailsPage";
import CartPage from "./components/CartPage/CartPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { supabase } from "./config/supabase";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setUser(session?.user ?? null);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, setSession]);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
