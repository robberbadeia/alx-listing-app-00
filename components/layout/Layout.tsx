import Header from "./Header";
import Footer from "./Footer";
import React from "react";

interface LayoutPtops {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPtops> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer /> {/* Footer will always stick to the bottom */}
    </div>
  );
};

export default Layout;
