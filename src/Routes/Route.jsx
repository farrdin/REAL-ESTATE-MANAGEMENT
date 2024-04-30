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
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
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
