import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or replace with emoji

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 border-b border-gray-200">
      <div className="lg:hidden relative flex items-center justify-center sm:justify-center h-16">
        {/* Hamburger icon – flush right */}
        <div className="absolute left-4 top-0 bottom-0 flex items-center sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Nav links */}
      <ul
        className={`${menuOpen ? "block px-6" : "hidden"
          } sm:flex flex-col sm:flex-row sm:justify-center sm:space-x-8 text-md uppercase tracking-wide mt-4 sm:mt-0`}
      >
        {navItems.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block py-2 sm:py-0 hover:underline transition-colors duration-200 text-black ${isActive ? "underline" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
}
