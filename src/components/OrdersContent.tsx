import CartList from "@/components/CartList.tsx";
import CreateOrderForm from "@/components/CreateOrderForm.tsx";
import { Button } from "./ui/button";

function OrdersContent() {
  return (
    <div className={"m-auto w-11/12 space-y-10 md:grid md:w-full md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-5 md:space-y-0 xl:gap-10"}>
      <CartList />
      <CreateOrderForm />
      <div className="col-span-2 text-left">
        <Button type={"submit"} className={"rounded-lg bg-sky-500 py-7 text-2xl text-white"}>
          أرسل الطلب
        </Button>
      </div>
    </div>
  );
}

export default OrdersContent;
