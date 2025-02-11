import { Button } from "@/components/ui/button.tsx";
import { Minus, Plus } from "lucide-react";
interface CounterProps {
  count: number;
  setCount: (count: number) => void;
  className?: string;
}
function Counter({ count, setCount,className }:CounterProps ) {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className={`m-auto flex  items-center justify-between gap-2 ${className}`}>
      <Button variant={"outline"} size={"icon"} onClick={increment}>
        <Plus />
      </Button>
      <input
        type={"text"}
        pattern={"[0-9]*"}
        value={Number.isNaN(count) ? 0 : count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className={"max-w-fit w-12 text-center focus:outline-none"}
      />
      <Button variant={"outline"} size={"icon"} onClick={decrement}>
        <Minus />
      </Button>
    </div>
  );
}

export default Counter;
