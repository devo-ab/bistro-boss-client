import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Layout = () => {
  const location = useLocation();
  console.log(location)
  const noHeaderFooter = location.pathname.includes("signin") || location.pathname.includes("signup");

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Layout;
