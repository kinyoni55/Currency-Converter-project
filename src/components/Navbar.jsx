import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Currency Converter</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/converter">Converter</Link></li>
        <li><Link to="/chart">Chart</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;