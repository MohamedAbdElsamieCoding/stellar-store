import { useState } from "react";
import Button from "../../../shared/Button";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 w-full">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="font-headline text-[10px] text-text">
            REGISTRY ID / EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="operator@cybermart.io"
            className="bg-[#3F3F46] py-3 px-1 text-text"
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
      </form>
      <Button
        text="INITIALIZE SESSION"
        onClick={() => {
          navigate("/");
        }}
        className="py-4"
      />
    </div>
  );
};

export default LoginForm;
