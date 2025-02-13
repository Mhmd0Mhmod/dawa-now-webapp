import { Link } from "react-router-dom";

function OrdersList() {
  return (
    <div className={"col-span-2 min-w-fit space-y-4 text-gray-500"}>
      <h3 className={"text-center text-2xl text-black"}>الطلبات</h3>
      <ul className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Link to={(index + 1).toString()} key={index}>
            <li className={`cursor-pointer rounded-lg p-2 duration-200 hover:scale-100 hover:transform hover:bg-gray-100 hover:text-blue-450`}>الطلب رقم {index + 1}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;
