import React from "react"
const Main = React.lazy(() => import("../components/Homepage/Main"))
const Login = React.lazy(() => import("../components/Login/Login"));
const Register = React.lazy(() => import("../components/Register/Register"));
const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const Listing = React.lazy(() => import("../components/Listings/Listing"));
const Settings = React.lazy(() => import("../components/Settings/Settings"));
const Description = React.lazy(() => import("../components/Listings/Description"));
const Reset = React.lazy(() => import("../components/Login/Reset"));

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