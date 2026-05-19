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
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  const setSession = useAuthStore((state) => state.setSession);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setUser(session?.user ?? null);

      setLoading(false);
    };

    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, setSession, setLoading]);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route element={<PublicOnlyRoute />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
