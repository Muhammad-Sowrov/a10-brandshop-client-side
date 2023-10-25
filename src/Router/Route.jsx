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
import UpdateD from "../Pages/Brand/Dior/Update/UpdateD";
import Details from "../Pages/Brand/Dior/Details/Details";
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
        element: <PrivateRoute><BookedCart></BookedCart></PrivateRoute>,
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
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/updateD/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/updateE/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/updateR/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/updateS/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/updateO/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/updateL/:id",
        element: <PrivateRoute><UpdateD></UpdateD></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
    
      {
        path: "/products/Estee Lauder",
        element: <Estee></Estee>,
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/products/Revlon",
        element: <Revlon></Revlon>,
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/products/Shiseido",
        element: <Shiseido></Shiseido>,
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/products/Olay",
        element: <Olay></Olay>,
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/products/Lancome",
        element: <Lancome></Lancome>,
        loader: ()=> fetch(" https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products")
      },
      {
        path: "/detailsD/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/detailsE/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/detailsR/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/detailsS/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/detailsO/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      },
      {
        path: "/detailsL/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(` https://blushly-server-6wrqw3jbw-muhammad-sowrov.vercel.app/products/id/${params.id}`)
      }
    ],
  },
]);

export default router;
