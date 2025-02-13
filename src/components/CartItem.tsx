import { Medicine as itemType } from "@/types/Medicine.ts";
import { useState } from "react";
import Counter from "@/components/Counter.tsx";
import { X } from "lucide-react";
import { motion } from "motion/react";

interface CartItemProps {
  item: itemType;
}

function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  return (
    <div className={"group relative flex justify-between rounded-xl border px-10 py-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"}>
      <div className={"flex flex-col gap-2"}>
        <h1 className={"text-2xl"}>{item.name}</h1>
        <p className={"text-sm text-gray-500"}>{item.description}</p>
      </div>
      <div className={"flex flex-col items-center justify-between gap-2"}>
        <div className={"min-w-20"}>
          <Counter count={quantity} setCount={setQuantity} />
        </div>
        <p className={"text-xl"}>{item.price} $</p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={"absolute left-2 top-2 hidden group-hover:block"}
      >
        <X />
      </motion.div>
    </div>
  );
}

export default CartItem;
