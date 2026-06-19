import { Outlet } from "react-router";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import Footer from "../pages/Home/Shared/Footer/Footer";

const RootLayouts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayouts;
