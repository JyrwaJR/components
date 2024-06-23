import React, { ReactNode } from "react";
import { Navbar } from "../nav-bar/nav-bar";
import { SideBar } from "../side-bar/side-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12 h-screen overflow-hidden">
        {/* Sidebar */}
        <SideBar />
        {/* Main content area */}
        <div className="col-span-12 md:col-span-10 flex flex-col h-screen">
          {/* Scrollable content container */}
          <main className="flex-grow border border-rose-400 overflow-auto p-4 container mx-auto">
            {children}
          </main>
        </div>
      </div>
      <Navbar
        navItems={[
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Contact", url: "/contact" },
        ]}
      />
    </>
  );
};

export default Layout;

{
  /* Navbar */
}
