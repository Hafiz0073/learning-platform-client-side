import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import LeftSideNav from "../components/LeftSideNav/LeftSideNav";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://learning-platform-server-side-two.vercel.app/courses`)

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://learning-platform-server-side-two.vercel.app/courses`)

            },

            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://learning-platform-server-side-two.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-platform-server-side-two.vercel.app/courses/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <div><h2>There is no Data</h2></div>
            }
        ]
    }

])