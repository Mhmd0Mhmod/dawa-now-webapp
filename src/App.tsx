import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NewOrder from "@/pages/NewOrder.tsx";
import NotFound from "./pages/NotFound";
import Orders from "@/pages/Orders.tsx";
import OrderDetails from "@/components/OrderDetails.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to={"/home"} replace />} />
            <Route path="home" element={<Home />} />
            <Route path={"orders"} element={<Orders />}>
              <Route index element={<Navigate to={"/orders"} />} />
              <Route path={":id"} element={<OrderDetails />} />
            </Route>
            <Route path={"orders/new"} element={<NewOrder />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
