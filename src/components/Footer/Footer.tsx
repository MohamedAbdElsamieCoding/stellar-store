import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { title: "Privacy Policy", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Support", link: "#" },
  ];
  return (
    <footer className="py-12 px-4 flex flex-col md:flex-row md:justify-between bg-neutral">
      <div className="flex flex-col gap-2 font-headline">
        <p className="text-lg">Stellar Store</p>
        <p className="text-sm text-text/40">
          © 2024 STELLAR STORE. HIGH PERFORMANCE RETAIL.
        </p>
      </div>
      <div className="flex items-center gap-8">
        {footerLinks.map((item) => (
          <Link
            id={item.title}
            to={item.link}
            className="text-text/40 active:underline active:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
