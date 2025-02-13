import { Button } from "./ui/button";
import { useState } from "react";
import Counter from "@/components/Counter.tsx";
import { Medicine } from "@/types/Medicine.ts";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Card({ product }: { product: Medicine }) {
  console.log(product);
  const [count, setCount] = useState<number>(0);
  return (
    <div className="min-w-fit max-w-72 space-y-5 rounded-xl border px-4 py-2 text-center shadow-md">
      <h1 className={"text-xl"}>{product.name} </h1>
      <p className={"text-gray-500"}>{product.description}</p>
      <div className="m-auto flex w-fit items-center justify-center gap-4">
        <Counter count={count} setCount={setCount} className={"m-auto w-fit"} />
        <Button size={"icon"} className="bg-blue-450 px-10 py-5">
          <AiOutlineShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default Card;
