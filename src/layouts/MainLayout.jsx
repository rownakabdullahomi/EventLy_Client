import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/Footer";

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
      <nav className="w-full sticky backdrop-blur-md backdrop-saturate-150 bg-white/30 text-white shadow-md top-0 z-50">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
