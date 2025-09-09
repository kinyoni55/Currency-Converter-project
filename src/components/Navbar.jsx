import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent relative z-20 text-black flex justify-between items-center px-8 py-8 ">
     
      <div className="flex items-center gap-2">
        <div className=" rounded-full  
        flex items-center justify-center">
          <img
            src="src/assets/images/Logo1kk.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
        <h1 className="text-lg font-semibold text-purple-600">
      Kinyoni Konverter</h1>
      </div>

      <ul className="flex gap-2 
       rounded-full pl-0.5 py-1 text-white shadow-[inset_2px_2px_2px_1px_rgba(0,0,0,0.3)]">
        <li>
          <Link
            to="/"
            className="px-6 py-1.5 rounded-full hover:bg-gradient-to-tl from-[#00CAFF] to-[#0065F8] t "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/converter"
            className="px-6 py-1.5 rounded-full hover:bg-gray-300 font-semibold"
          >
            Converter
          </Link>
        </li>
        <li>
          <Link
            to="/chart"
            className="px-6 py-1.5 rounded-full hover:bg-gray-300 font-semibold"
          >
            Chart
          </Link>
        </li>
        <li>
          <Link
            to="/newspage"
            className="px-6 py-1.5 rounded-full hover:bg-gray-300 font-semibold"
          >
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
