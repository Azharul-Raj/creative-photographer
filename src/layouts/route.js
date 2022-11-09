import { createBrowserRouter } from "react-router-dom";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Details/Details";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";
import HomePage from "../pages/HomePage/HomePage";
import MyReview from "../pages/MyReview/MyReview";
import Update from "../pages/MyReview/Update/Update";
import Protected from "../pages/Protected/Protected"
import Main from "./Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: '/services',
                element:<AllServices/>
            },
            {
                path: "/service/:id",
                element: <Details />,
                loader:({params})=>fetch(`http://localhost:3001/service/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog/>
            },
            {
                path: '/myreviews',
                element:<Protected><MyReview/></Protected>
            },
            {
                path: '/update/:id',
                element:<Update/>
            },
            {
                path: 'addservice',
                element:<Protected><AddService/></Protected>
            }
        ]
    }
])