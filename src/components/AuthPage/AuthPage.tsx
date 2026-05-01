import AuthFormSection from "./AuthFormSection/AuthFormSection";
import AuthHeroSection from "./AuthHeroSection/AuthHeroSection";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 gap-40 md:grid-cols-2 min-h-screen md:gap-4">
      <AuthHeroSection />
      <AuthFormSection />
    </div>
  );
};

export default LoginPage;
