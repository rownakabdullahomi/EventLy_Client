import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import { router } from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </StrictMode>
);
