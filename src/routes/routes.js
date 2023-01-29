import React from "react"
const Main = React.lazy(() => import("../pages/Homepage/Main"))
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Listing = React.lazy(() => import("../pages/Listing/Listing"));
const Settings = React.lazy(() => import("../pages/Setting/Settings"));
const Description = React.lazy(() => import("../pages/Listing/Description"));
const Reset = React.lazy(() => import("../pages/Reset/Reset"));

const routes = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/listing",
        element: <Listing />
    },
    {
        path: "/listing/listID",
        element: <Description />
    },
    {
        path: "/setting",
        element: <Settings />
    },
    {
        path: "/reset/password/:token",
        element: <Reset />
    },
]

export default routes