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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/Brand.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/cart",
                element: <BookedCart></BookedCart>
            },
            {
                path: "/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/faq",
                element: <Qna></Qna>
            }
            
        ]
    }
])

export default router;