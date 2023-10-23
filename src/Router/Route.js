import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import Login from "../component/login/Login";
import Register from "../component/login/Register";
import Error from "../component/shared/error/Error";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProducts from "../pages/dashboard/AddProducts";
import MyBuyer from "../pages/dashboard/MyBuyer";
import Myorders from "../pages/dashboard/Myorders";
import MyProducts from "../pages/dashboard/MyProducts";
import Home from "../pages/Home/Home";
import Products from "../pages/Home/products/Products";
import Service from "../pages/service/Service";
import Private from "./Private";
import Allseller from "../pages/dashboard/adimin/Allseller";
import AllBuyer from "../pages/dashboard/adimin/AllBuyer";
import BuyerRoute from "./BuyerRoute";
import SellerRout from "./SellerRout";
import Payment from "../pages/Home/payment/Payment";
import AllCatergory from "../pages/Home/products/AllCatergory";
import ProductsDetails from "../pages/Home/products/ProductsDetails";
import Similar from "../pages/Home/products/Similar";
import AddToCart from "../pages/addTocart/AddToCart";
import Profile from "../pages/Profile/Profile";
import OrderSummery from "../pages/OrderSummery/OrderSummery";
import OrderSummeryTwo from "../pages/OrderSummery/OrderSummeryTwo";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element:       <Private>
        <Profile></Profile></Private>,
      },
      {
        path: "/OrderSummery",
        element:       <Private>
        <OrderSummery/></Private>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/OrderSummeryTwo",
        element: <OrderSummeryTwo/>,
      },

      { path: "/Service", element: <Service></Service> },
      { path: "/AddToCart", element: <AddToCart/> },

      {
        path: "/service/:id",
        element: (
          <Private>
            <Products></Products>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-kohl.vercel.app/api/v1/category/${params?.id}`
          ),
      },
      {
        path: "/books/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-kohl.vercel.app/api/v1/stock/${params?.id}`
          ),
      },
      {
        path: "/similar/:id",
        element: <Similar />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-kohl.vercel.app/api/v1/stock/${params?.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allCategory",
        element: <AllCatergory />,
      },
    ],
  },
  {
    path: "/dashboard",

    element: (
      <Private>
        {" "}
        <DashboardLayout></DashboardLayout>
      </Private>
    ),
    children: [
      {
        path: "/dashboard/myproducts",
        loader: () => fetch("http://localhost:5000/users"),

        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyer></MyBuyer>,
      },

      {
        path: "/dashboard/addproducts",
        element: <AddProducts></AddProducts>,
      },

      {
        path: "/dashboard/myorders",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <Allseller></Allseller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
