import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <div className="md:space-x-5  md:space-y-0 flex flex-col md:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-center font-medium text-white"
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-center font-medium text-white"
        }
      >
        CONTACT US
      </NavLink>

      {
        user && isAdmin && <NavLink
        to="/dashboard/adminHome"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-center font-medium text-white"
        }
      >
        DASHBOARD
      </NavLink>
      }

{
        user && !isAdmin && <NavLink
        to="/dashboard/userHome"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-center font-medium text-white"
        }
      >
        DASHBOARD
      </NavLink>
      }

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-white font-medium text-center"
        }
      >
        OUR MENU
      </NavLink>

      <NavLink
        to="/order/salad"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-lg font-medium text-center"
            : "text-white font-medium text-center"
        }
      >
        ORDER FOOD
      </NavLink>

      <NavLink
        to="/dashboard/cart"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] md:text-2xl font-medium text-center"
            : "text-white md:text-xl font-medium text-center"
        }
      >
        <button className="flex gap-2 relative items-center">
        <p><FaCartShopping /></p>
          <div className="badge bg-gray-700 text-white absolute bg-opacity-30 md:-top-3 left-4 md:left-2">+{cart.length}</div>
        </button>
      </NavLink>

      {user ? (
        <>
          <button onClick={handleSignOut} className="text-white font-medium text-center">
            SIGN OUT
          </button>
          <div className="avatar">
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
        </>
      ) : (
        <>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] md:text-lg font-medium text-center"
                : "text-white font-medium text-center"
            }
          >
            SIGN IN
          </NavLink>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar fixed z-10 text-white bg-black bg-opacity-30 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl">Bistro Boss</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
