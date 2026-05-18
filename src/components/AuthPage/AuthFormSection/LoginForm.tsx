import { useState } from "react";
import Button from "../../../shared/Button";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import { login } from "../services/auth.service";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const setSession = useAuthStore((state) => state.setSession);
  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");

    try {
      setLoading(true);
      const { data, error } = await login(email, password);

      if (error) {
        console.log(error.message);
        return;
      }
      setUser(data.user);
      setSession(data.session);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-6 w-full">
      <form className="flex flex-col gap-6" onSubmit={handleLogin}>
        <div className="flex flex-col gap-1">
          <label className="font-headline text-[10px] text-text">
            REGISTRY ID / EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="operator@cybermart.io"
            className="bg-[#3F3F46] py-3 px-1 text-text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label className="font-headline text-[10px] text-text">
            ACCESS KEY
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••••••"
            className="bg-[#3F3F46] py-3 px-1 relative text-text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-3 top-8.5"
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </button>
        </div>
        <Button
          type="submit"
          text={loading ? "INITIALIZING..." : "INITIALIZE SESSION"}
          className="py-4"
        />
      </form>
    </div>
  );
};

export default LoginForm;
