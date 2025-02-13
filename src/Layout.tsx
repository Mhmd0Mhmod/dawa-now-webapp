import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <Header />
      <main className="mx-auto w-full flex-1 md:w-11/12">
        <Outlet />
      </main>
      <CartButton />
      <Footer />
    </div>
  );
}

export default Layout;
