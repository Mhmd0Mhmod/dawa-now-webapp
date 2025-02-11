import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Orders from "@/pages/Orders.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to={"/home"} replace />} />
            <Route path="home" element={<Home />} />
            <Route path={"orders"} element={<Orders/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
