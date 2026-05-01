import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
      <div className="flex justify-around font-headline border-b border-neutral relative">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === "login" ? "text-primary" : "text-gray-400 hover:text-gray-300"}`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeTab !== "login" ? "text-primary" : "text-gray-400 hover:text-gray-300"}`}
        >
          Register
        </button>
        <div
          className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out w-1/2 ${activeTab === "login" ? "left-0" : "left-1/2"}`}
        />
      </div>
      <div>{activeTab === "login" ? <LoginForm /> : <RegisterForm />}</div>
    </>
  );
};

export default AuthTabs;
