import AuthFormSection from "./AuthFormSection/AuthFormSection";
import AuthHeroSection from "./AuthHeroSection/AuthHeroSection";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <AuthHeroSection />
      <AuthFormSection />
    </div>
  );
};

export default LoginPage;
