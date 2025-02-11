import { CartItemType as itemType } from "@/types/CartItemType.ts";
import { useState } from "react";
import Counter from "@/components/Counter.tsx";
import { X } from "lucide-react";

interface CartItemProps {
  item: itemType;
}

function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  return (
    <div className={"group relative flex justify-between rounded-xl border px-10 py-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"}>
      <div className={"flex flex-col gap-2" }>
        <h1 className={"text-2xl"}>{item.name}</h1>
        <p className={"text-gray-500 text-sm"}>{item.description}</p>
      </div>
      <div className={"flex flex-col items-center justify-between gap-2"}>
        <div className={"min-w-20"}>
          <Counter count={quantity} setCount={setQuantity} />
        </div>
        <p className={"text-xl"}>{item.price} $</p>
      </div>
      <div className={"absolute left-2 top-2 hidden group-hover:block"}>
        <X />
      </div>
    </div>
  );
}

export default CartItem;
