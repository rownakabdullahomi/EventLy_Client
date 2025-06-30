import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllEvents from "../pages/AllEvents";
import AddEvent from "../pages/AddEvent";
import MyEvents from "../pages/MyEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
