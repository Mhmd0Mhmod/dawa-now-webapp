import { TiShoppingCart } from "react-icons/ti";
function CartTitle() {
  return (
    <nav className="flex items-center gap-10 m-auto w-fit">
      <div className="rounded-full bg-blue-450 p-4">
        <TiShoppingCart className="w-32 h-32 text-white" />
      </div>
      <p className="text-4xl">
        اكتب كل ما تحتاجه
        {"  "}
        <span className="text-blue-900">هنا </span>
        وهترد عليك اقرب صيدليه
        {"  "}
        <span className="text-red-500">حالا ...</span>
      </p>
    </nav>
  );
}

export default CartTitle;
