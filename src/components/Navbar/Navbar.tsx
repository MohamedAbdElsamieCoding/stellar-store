import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import clsx from "clsx";

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
                      ? "text-primary font-bold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary pb-1.5"
                      : "text-text hover:text-text",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-6 text-text text-xl">
          <button className="hover:scale-120 hover:text-primary duration-100">
            <FiShoppingCart />
          </button>
          <button className="hover:scale-120 hover:text-primary duration-100">
            <CgProfile />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
