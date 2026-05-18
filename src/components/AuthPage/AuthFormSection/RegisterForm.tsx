import { useState } from "react";
import Button from "../../../shared/Button";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import { register } from "../services/auth.service";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);
  const setSession = useAuthStore((state) => state.setSession);
  const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await register(email, password);
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
      <form onSubmit={handleRegister} className="flex flex-col gap-6">
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
          text={loading ? "INITIALIZING..." : "INITIALIZE SESSION"}
          className="py-4"
          type="submit"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
