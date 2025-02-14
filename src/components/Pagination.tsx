import { Button } from "@/components/ui/button.tsx";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

function Pagination({ length, onChange, value }: { length: number; onChange: (index: number) => void; value: number }) {
  const handleClick = (index: number) => {
    if (value === index) return;
    if (index <= 0 || index > length) return;
    onChange(index);
  };
  return (
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => handleClick(value - 1)}
            className={`inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900`}
          >
            <LiaGreaterThanSolid />
          </Button>
        </li>
        {Array.from({ length }).map((_, index) => (
          <li key={index}>
            <Button
              size={"icon"}
              onClick={() => handleClick(index + 1)}
              variant={"outline"}
              className={`${value === index + 1 ? "bg-blue-450 text-white hover:bg-blue-450 hover:text-white" : "bg-white text-gray-900"} block size-8 rounded-sm border border-gray-100 text-center leading-8`}
            >
              {index + 1}
            </Button>
          </li>
        ))}

        <li>
          <Button
            onClick={() => handleClick(value + 1)}
            size={"icon"}
            variant={"outline"}
            className={`inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900`}
          >
            <LiaLessThanSolid />
          </Button>
        </li>
      </ol>
    </div>
  );
}

export default Pagination;
