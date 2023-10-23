import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../Pages/Login";
import BookedCart from "../Pages/BookedCart";
import About from "../Pages/About";
import Qna from "../Pages/Qna";
import AddProduct from "../Pages/AddProduct";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import Dior from "../Pages/Brand/Dior/Dior";
import Estee from "../Pages/Brand/Estee/Estee";
import Lancome from "../Pages/Brand/Lancome/Lancome";
import Revlon from "../Pages/Brand/Revlon/Revlon";
import Shiseido from "../Pages/Brand/Shiseido/Shiseido";
import Olay from "../Pages/Brand/Olay/Olay";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <BookedCart></BookedCart>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <Qna></Qna>,
      },
      {
        path: "/products/dior",
        element: <Dior></Dior>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/products/Estee Lauder",
        element: <Estee></Estee>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/products/Revlon",
        element: <Revlon></Revlon>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/products/Shiseido",
        element: <Shiseido></Shiseido>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/products/Olay",
        element: <Olay></Olay>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/products/Lancome",
        element: <Lancome></Lancome>,
        loader: ()=> fetch("http://localhost:5000/products")
      }
    ],
  },
]);

export default router;
