import { Button } from "./ui/button";
import { useState } from "react";
import Counter from "@/components/Counter.tsx";

function Card() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="space-y-5 rounded-xl border px-4 py-2 text-center shadow-xl">
      <h1>بدياشور، كومبليت +3، من 3-10 سنوات، بنكهة الفانيليا - 900 جم</h1>
      <Counter count={count} setCount={setCount} className={"w-1/2"} />
      <div className="m-auto w-fit">
        <Button className="px-10 py-5">إضافة </Button>
      </div>
    </div>
  );
}

export default Card;
