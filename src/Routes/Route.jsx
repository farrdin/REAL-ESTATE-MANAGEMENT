import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import UpdateProfile from "../Pages/UpdateProfile";
import DetailProperty from "../Pages/DetailProperty";
import ExtraaPage from "../Pages/ExtraaPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/details",
        element: <DetailProperty></DetailProperty>,
      },
      {
        path: "/extraa",
        element: <ExtraaPage></ExtraaPage>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
