import { Medicine } from "@/types/Medicine.ts";
import Card from "@/components/Card.tsx";
import Input from "@/components/Input.tsx";
import { CiSearch } from "react-icons/ci";

function ProductsCards({ products }: { products: Medicine[] }) {
  return (
    <div className={"col-span-9 space-y-7"}>
      <div className={"flex justify-end"}>
        <Input Icon={CiSearch} className={"mr-auto"} />
      </div>
      <div className={"flex w-full flex-wrap gap-5"}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsCards;
