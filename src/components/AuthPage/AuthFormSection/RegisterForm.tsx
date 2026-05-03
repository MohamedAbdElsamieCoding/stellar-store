import { useState } from "react";
import Button from "../../../shared/Button";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="font-headline text-[10px] text-text">
            USER NAME
          </label>
          <input
            type="text"
            name="username"
            placeholder="type_your_name"
            className="bg-[#3F3F46] py-3 px-1 text-text"
          />
        </div>
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
      <Button text="INITIALIZE SESSION" onClick={() => {}} className="py-4"/>
    </div>
  );
};

export default RegisterForm;
