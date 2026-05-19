import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { navbarTransition, navbarVariants } from "../../animations/variants";
import { useAuthStore } from "../../store/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    // { title: "Cart", link: "/cart" },
    // { title: "Profile", link: "/profile" },
  ];

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        transition={navbarTransition}
        className="relative flex justify-between items-center px-8 py-5 bg-neutral"
      >
        <h2
          className="text-xl md:text-2xl text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          Stellar Store
        </h2>
        <ul className="hidden md:flex gap-8 pr-2">
          {navLinks.map((item) => {
            const isActive =
              item.link === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.link);
            return (
              <li>
                <Link
                  id={item.title}
                  to={item.link}
                  className={clsx(
                    "relative transition-all duration-300",
                    isActive
                      ? "text-primary font-bold pb-1.5"
                      : "text-text hover:text-text",
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-6 text-text text-xl items-center">
          <form className="flex items-center gap-3 bg-tertiary/90 px-4 py-1.5 border border-text/20 rounded-sm focus-within:border-primary transition">
            <button type="button" className="text-text/90">
              <IoIosSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="text-sm w-full placeholder:text-text/20"
            />
          </form>

          <button
            onClick={() => navigate("/cart")}
            className="hidden md:flex hover:scale-120 hover:text-primary duration-400"
          >
            <FiShoppingCart />
          </button>
          <button
            onClick={handleProfileClick}
            className="hidden md:flex hover:scale-120 hover:text-primary transition-all duration-400"
          >
            <CgProfile />
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden pl-1 hover:text-primary duration-300 transition-all active:text-primary"
        >
          <IoIosMenu className="text-3xl" />
        </button>
        {isOpen && (
          <motion.ul className="absolute top-full left-0 w-full bg-neutral md:hidden flex flex-col gap-4 p-4 border-t z-50">
            {navLinks.map((item) => {
              const isActive =
                item.link === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.link);
              return (
                <li className="text-center">
                  <Link
                    onClick={() => {
                      setTimeout(() => setIsOpen(false), 200);
                    }}
                    id={item.title}
                    to={item.link}
                    className={clsx(
                      "relative transition-all duration-300",
                      isActive
                        ? "text-primary font-bold pb-1.5"
                        : "text-text hover:text-text",
                    )}
                  >
                    {item.title}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
