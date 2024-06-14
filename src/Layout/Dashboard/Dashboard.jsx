import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoCalendarSharp } from "react-icons/io5";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { MdCollectionsBookmark } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex max-w-7xl mx-auto">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-600">
        <ul className="menu p-4">
          {isAdmin  ? <div><li>
                <NavLink to="/dashboard/adminHome">
                  <AiFillHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <ImSpoonKnife />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                <TfiMenuAlt />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                <HiMiniUserGroup />
                  All User
                </NavLink>
              </li></div> : <div><li>
                <NavLink to="/dashboard/userHome">
                  <AiFillHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <IoCalendarSharp />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payhistory">
                  <BsCreditCard2FrontFill />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  <MdOutlineReviews />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <MdCollectionsBookmark />
                  My Booking
                </NavLink>
              </li></div>}
          {/* shared */}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <AiFillHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <IoMenu />
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              <IoMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
