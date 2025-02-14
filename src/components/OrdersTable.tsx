import { Head, Row, Table, Tbody, TD, TH } from "@/components/Table.tsx";
import StatusInfo from "@/components/StatusInfo.tsx";

function OrdersTable({ orders }: { orders: { id: number; order: string; price: number; status: string; date: string }[] }) {
  return (
    <Table>
      <Head>
        <TH>رقم الطلب</TH>

        <TH>الطلب</TH>
        <TH>السعر</TH>
        <TH>حالة الطلب</TH>
        <TH>التاريخ</TH>
      </Head>
      <Tbody>
        {orders.map((order) => (
          <Row key={order.id}>
            <TD>{order.id}</TD>
            <TD>{order.order}</TD>
            <TD>{order.price}</TD>
            <TD>
              <StatusInfo status={order.status}  className={"m-auto"} />
            </TD>
            <TD>{order.date}</TD>
          </Row>
        ))}
      </Tbody>
    </Table>
  );
}

export default OrdersTable;
