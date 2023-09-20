import { useEffect, useState } from "react";
import MobileNav from "../components/Navigation/MobileNav/MobileNav";
import FullNav from "../components/Navigation/FullNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const root = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (screen.width < 900) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div>
      {isMobile ? <MobileNav /> : <FullNav />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default root;
