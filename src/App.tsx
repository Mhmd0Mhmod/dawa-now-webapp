import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Orders from "@/pages/Orders.tsx";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to={"/home"} replace />} />
            <Route path="home" element={<Home />} />
            <Route path={"orders"} element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
