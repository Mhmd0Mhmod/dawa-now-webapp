import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="space-y-5 rounded-xl border px-4 py-2 text-center shadow-xl">
      <h1>بدياشور، كومبليت +3، من 3-10 سنوات، بنكهة الفانيليا - 900 جم</h1>
      <div className="m-auto flex w-1/2 items-center justify-between">
        <Button variant={"outline"} size={"icon"} onClick={increment}>
          <Plus />
        </Button>
        <span>{count}</span>
        <Button variant={"outline"} size={"icon"} onClick={decrement}>
          <Minus />
        </Button>
      </div>
      <div className="m-auto w-fit">
        <Button className="px-10 py-5">إضافة </Button>
      </div>
    </div>
  );
}

export default Card;
