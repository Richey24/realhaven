import React from "react"
const OnboardOne = React.lazy(() => import("../pages/Onboarding/OnboardOne"))
const OnboardTwo = React.lazy(() => import("../pages/Onboarding/OnboardTwo"))
const OnboardThree = React.lazy(() => import("../pages/Onboarding/OnboardThree"))
const OnboardFour = React.lazy(() => import("../pages/Onboarding/OnboardFour"))
const Main = React.lazy(() => import("../pages/Homepage/Main"))
const Login = React.lazy(() => import("../pages/Login/Login"));
const RegisterPageOne = React.lazy(() => import("../pages/Register/RegisterPageOne"));
const RegisterPageTwo = React.lazy(() => import("../pages/Register/RegisterPageTwo"));
const RegisterPageThree = React.lazy(() => import("../pages/Register/RegisterPageThree"));
const RegisterPageFour = React.lazy(() => import("../pages/Register/RegisterPageFour"));
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
        element: <RegisterPageOne />
    },
    {
        path: "/register/two",
        element: <RegisterPageTwo />
    },
    {
        path: "/register/three",
        element: <RegisterPageThree />
    },
    {
        path: "/register/four",
        element: <RegisterPageFour />
    },
    {
        path: "/onboarding/setup",
        element: <OnboardOne />
    },
    {
        path: "/onboarding/team",
        element: <OnboardTwo />
    },
    {
        path: "/onboarding/analytics",
        element: <OnboardThree />
    },
    {
        path: "/onboarding/promote",
        element: <OnboardFour />
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
        path: "/listing/:listID",
        element: <Description />
    },
    {
        path: "/setting",
        element: <Settings />
    },
    {
        path: "/password/reset",
        element: <Reset />
    },
]

export default routes