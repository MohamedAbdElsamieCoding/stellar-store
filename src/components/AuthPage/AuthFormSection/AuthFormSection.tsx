import AuthTabs from "./AuthTabs";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signInWithGithub, signInWithGoogle } from "../services/auth.service";
const AuthFormSection = () => {
  return (
    <div className="flex min-h-screen w-full justify-center md:py-7">
      <div className="w-4/6 max-w-lg flex flex-col gap-12 p-3 rounded-2xl">
        <div className="flex flex-col gap-2 justify-start">
          <p className="text-white">System Access</p>
          <p className="text-text">Identify yourself to proceed to terminal.</p>
        </div>

        <AuthTabs />
        
        <p
          className="flex items-center gap-3 text-neutral-400 text-center
                    before:content-[''] before:flex-1 before:h-px before:bg-neutral-600
                    after:content-[''] after:flex-1 after:h-px after:bg-neutral-600"
        >
          EXTERNAL AUTH
        </p>
        <div className="flex flex-col gap-5 md:justify-evenly md:flex-row ">
          <button
            onClick={signInWithGoogle}
            className="flex items-center gap-3 cursor-pointer py-3 px-7 border border-text active:translate-y-0.5 duration-75 justify-center"
          >
            <FaGoogle className="text-2xl" />
            <p className="text-text">GOOGLE</p>
          </button>
          <button
            onClick={signInWithGithub}
            className="flex items-center gap-3 cursor-pointer py-3 px-7 border border-text active:translate-y-0.5 duration-75 justify-center"
          >
            <FaGithub className="text-2xl" />
            <p className="text-text">GITHUB</p>
          </button>
        </div>
        <p className="text-text text-center">
          ENCRYPTED 256-BIT SECURE PROTOCOL ACTIVE
        </p>
      </div>
    </div>
  );
};

export default AuthFormSection;
