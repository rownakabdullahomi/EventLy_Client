import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Toast Notifications */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />

      {/* Navbar */}
      <nav className="w-full sticky backdrop-blur-md backdrop-saturate-150 bg-white/30 text-base shadow-md top-0 z-50">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
