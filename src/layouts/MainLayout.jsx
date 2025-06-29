import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>

    {/* Main Content */}
    <main className="grow">
        <Outlet/>
    </main>

    </div>
  );
};

export default MainLayout;
