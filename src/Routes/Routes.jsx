import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Room-Details/RoomDetails";
import Restaurant from "../Pages/Restaurant/Restaurant";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:'/rooms',
                element: <Rooms />
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><RoomDetails /></PrivateRoute>
            },
            {
                path: '/restaurant',
                element: <Restaurant />
            },
            {
                path:'/login',
                element: <LogIn />
            },
            {
                path:'/signup',
                element: <SignUp />
            },
            {
                path:'/bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    }
])
export default routes