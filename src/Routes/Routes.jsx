import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Room-Details/RoomDetails";

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
                element: <RoomDetails />
            }
        ]
    }
])
export default routes