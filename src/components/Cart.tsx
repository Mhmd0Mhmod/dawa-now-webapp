import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CartList from "./CartList";
import { Button } from "./ui/button";

export default function Cart() {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-0 flex h-full w-1/4 flex-col gap-10 bg-white px-4 py-8 shadow-xl"
    >
      <CartList className="bg-gray-50" />
      <Link to={"/orders/new"}>
        <Button className="block w-full bg-blue-450">الانتقال للصفحه التاليه</Button>
      </Link>
    </motion.aside>
  );
}
