import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaFilm className="text-2xl text-amber-400" />
          <h1 className="text-2xl font-bold text-white">
            Reel<span className="text-amber-400">Rate</span>
          </h1>
        </Link>

        {/* Menu */}
        <ul className="flex gap-8 font-medium text-gray-300">

          <li>
            <Link
              to="/"
              className="transition hover:text-amber-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/movies"
              className="transition hover:text-amber-400"
            >
              Movies
            </Link>
          </li>

          <li>
            <Link
              to="/genres"
              className="transition hover:text-amber-400"
            >
              Genres
            </Link>
          </li>

          <li>
            <Link
              to="/reviews"
              className="transition hover:text-amber-400"
            >
              Reviews
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;