import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import UpdateProfile from "../Pages/UpdateProfile";
import DetailProperty from "../Pages/DetailProperty";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import WishList from "../Pages/WishList";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Componets/Error";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/about",
        element: <About></About>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailProperty></DetailProperty>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
