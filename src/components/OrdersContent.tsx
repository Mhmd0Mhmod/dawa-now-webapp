import CartList from "@/components/CartList.tsx";
import CreateOrderForm from "@/components/CreateOrderForm.tsx";

function OrdersContent() {
  return (
    <div className={"m-auto grid w-11/12 grid-cols-2 grid-rows-[1fr_auto]  gap-10"}>
      <CartList />
      <CreateOrderForm />
      <button type={"submit"} className={"bg-sky-650 col-span-2 m-auto block w-5/12 rounded-lg py-2 text-2xl text-white"}>
        أرسل الطلب
      </button>
    </div>
  );
}

export default OrdersContent;
