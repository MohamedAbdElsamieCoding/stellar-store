import { useState } from "react";
import Button from "../../../shared/Button";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await login(email, password);

      if (error) {
        console.log(error.message);
        return;
      }
      navigate(from, { replace: true });
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
            value={email}
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
            value={password}
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
          disabled={loading || !email || !password}
          text={loading ? "INITIALIZING..." : "INITIALIZE SESSION"}
          className="py-4"
        />
      </form>
    </div>
  );
};

export default LoginForm;
