import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Course from "../components/Course/Course";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import LeftSideNav from "../components/LeftSideNav/LeftSideNav";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/courses`)

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`)

            },

            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])