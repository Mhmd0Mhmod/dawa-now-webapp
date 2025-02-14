import { Separator } from "@/components/ui/separator.tsx";
import StatusInfo from "@/components/StatusInfo.tsx";

function OrderReceipt({
  orderReceipt,
}: {
  orderReceipt?: {
    id: number;
    order: {
      id: number;
      name: string;
      price: number;
    }[];
    price: number;
    status: string;
    date: string;
  };
}) {
  return orderReceipt ? (
    <div className={"flex w-full flex-col items-center justify-center space-y-4 text-gray-500"}>
      <div className={"flex w-10/12 items-center justify-between"}>
        <h3>رقم الطلب</h3>
        <p>{orderReceipt.id}</p>
      </div>
      <div className={"flex w-10/12 items-center justify-between"}>
        <h3>حالة الطلب</h3>
        <StatusInfo status={orderReceipt.status} />
      </div>

      <div className={"flex w-10/12 items-center justify-between"}>
        <h3>التاريخ</h3>
        <p>{orderReceipt.date}</p>
      </div>

      <Separator orientation={"horizontal"} className={"w-10/12 bg-blue-450"} />

      <div className={"flex max-h-96 w-full flex-col items-center justify-center space-y-4 overflow-y-auto"}>
        <h3 className={"text-2xl font-bold text-gray-800"}>الطلب</h3>
        <div className={"flex w-full flex-col items-center justify-center space-y-4"}>
          {orderReceipt.order.map((item) => (
            <div key={item.id} className={"flex w-10/12 items-center justify-between"}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Separator orientation={"horizontal"} className={"w-10/12 bg-blue-450"} />
      <div className={"flex w-10/12 items-center justify-between"}>
        <h3>السعر</h3>
        <p>{orderReceipt.price}</p>
      </div>
    </div>
  ) : (
    <div className={"flex items-center justify-center"}>
      <h1 className={"text-3xl font-bold text-gray-800"}>اختر طلب لعرض الفاتورة</h1>
    </div>
  );
}

export default OrderReceipt;
