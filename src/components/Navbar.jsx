import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <ul className="flex gap-6 justify-center text-lg font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/loading">Loading</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
