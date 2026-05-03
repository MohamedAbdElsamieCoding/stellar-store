import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import clsx from "clsx";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { title: "Shop", link: "/" },
    { title: "Deals", link: "/deals" },
    { title: "New Arrivals", link: "/arrivals" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-5 bg-neutral">
        <h2
          className="text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          Stellar Store
        </h2>
        <ul className="flex gap-8">
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
        <div className="flex gap-6 text-text text-xl">
          <button className="hover:scale-120 hover:text-primary duration-400">
            <FiShoppingCart />
          </button>
          <button className="hover:scale-120 hover:text-primary transition-all duration-400">
            <CgProfile />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
