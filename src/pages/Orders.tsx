import OrdersList from "@/components/OrdersList.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Outlet, useParams } from "react-router-dom";

function Orders() {
  const { id } = useParams();
  return (
    <div className={"grid grid-cols-12 gap-4"}>
      <OrdersList />
      <Separator orientation={"vertical"} className="bg-blue-450" />
      <div className="col-span-8">
        {!id && (
          <div className={"flex h-full flex-col items-center justify-center"}>
            <p className={"text-center text-gray-500"}>اختر الطلب لعرض التفاصيل</p>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;