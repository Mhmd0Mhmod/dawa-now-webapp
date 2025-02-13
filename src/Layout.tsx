import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <Header />
      <main className="mx-auto w-full flex-1 md:w-11/12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
