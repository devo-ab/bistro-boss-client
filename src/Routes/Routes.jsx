import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUser from "../Pages/Dashboard/AllUser";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageITems from "../Pages/Dashboard/ManageITems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element : <OrderFood></OrderFood>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // normal user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "cart",
        element: <MyCart></MyCart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "payhistory",
        element: <PaymentHistory></PaymentHistory>
      },
      // admin only routes
      {
        path: "adminHome",
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: "users",
        element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
      },
      {
        path: "addItems",
        element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path: "manageItems",
        element: <AdminRoutes><ManageITems></ManageITems></AdminRoutes>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params}) => fetch(`bistro-boss-server-inky-zeta.vercel.app/menu/${params.id}`)
      }
    ]
  }
]);


export default router;