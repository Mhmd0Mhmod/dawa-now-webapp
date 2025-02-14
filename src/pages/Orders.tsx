import Pagination from "@/components/Pagination.tsx";
import { useState } from "react";
import OrdersTable from "@/components/OrdersTable.tsx";
import OrderReceipt from "@/components/OrderReceipt.tsx";
import { Separator } from "@/components/ui/separator.tsx";

const orders = [
  {
    id: 1,
    order: "طلب 1",
    price: 100,
    status: "pending",
    date: "2021-09-01",
  },
  {
    id: 2,
    order: "طلب 2",
    price: 200,
    status: "delivered",
    date: "2021-09-02",
  },
  {
    id: 3,
    order: "طلب 3",
    price: 300,
    status: "canceled",
    date: "2021-09-03",
  },
  {
    id: 4,
    order: "طلب 4",
    price: 400,
    status: "pending",
    date: "2021-09-04",
  },
];

const fakeOrderReceipt = {
  id: 1,
  order: [
    {
      id: 1,
      name: "مشروب",
      price: 10,
    },
    {
      id: 2,
      name: "مشروب",
      price: 10,
    },
    {
      id: 3,
      name: "مشروب",
      price: 10,
    },
  ],
  price: 30,
  status: "مكتمل",
  date: "2021-09-01",

};
function Orders() {
  // const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);
  return (
    <div className="container mx-auto grid grid-cols-12  justify-center items-start  space-x-4">
      <div className={"col-span-4"}>
        <OrderReceipt orderReceipt={fakeOrderReceipt}  />
      </div>
      <Separator orientation={"vertical"} className={"h-full bg-blue-450"}/>
      <div className={"col-span-7"}>
        <OrdersTable orders={orders} />
        <Pagination length={10} value={currentPage} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default Orders;