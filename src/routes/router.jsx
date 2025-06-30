import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllEvents from "../pages/AllEvents";
import AddEvent from "../pages/AddEvent";
import MyEvents from "../pages/MyEvents";
import UpdateEvent from "../pages/UpdateEvent";
import Error404 from "./../pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-events",
        element: (
          <PrivateRoute>
            <AllEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "my-events",
        element: (
          <PrivateRoute>
            <MyEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "add-event",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
