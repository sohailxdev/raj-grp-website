import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <div className="h-screen flex flex-col">
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="flex-grow bg-zinc-100 dark:bg-black grid ">
        <div
          className={`flex-grow col-span-full 
            }`}
        >
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
