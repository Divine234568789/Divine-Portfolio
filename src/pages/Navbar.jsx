import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const nav_links = [
    { name: "Home", link: "/", label: "home" },
    { name: "About Me", link: "/About", label: "About Me" },
    { name: "Projects", link: "/Projects", label: "Projects" },
  ];

  return (
    <nav className="w-full p-5 bg-gray-800 text-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="img/Logo.png" alt="Logo" className="h-6 w-6" />
          <span className="font-bold text-2xl">Divine</span>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none hover:cursor-pointer"
          >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <ul className="hidden lg:flex gap-10 font-semibold">
          {nav_links.map((nav) => (
            <li key={nav.label}>
              <Link to={nav.link} className="hover:text-gray-300">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="lg:hidden mt-4 flex flex-col gap-4 font-semibold px-2">
          {nav_links.map((nav) => (
            <li key={nav.label}>
              <Link
                to={nav.link}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:text-gray-500 rounded"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
