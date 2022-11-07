import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Form/Login";
import HomePage from "../pages/HomePage/HomePage";
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
            }
        ]
    }
])