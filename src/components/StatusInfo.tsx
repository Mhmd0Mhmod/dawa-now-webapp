
function StatusInfo({ status  ,className }:{status:string , className?:string}) {
  let statusStyle  = "";
  switch (status) {
    case "pending":
      statusStyle = "bg-yellow-200 text-yellow-800 border border-yellow-800";
      break;
    case "delivered":
      statusStyle = "bg-green-200 text-green-800 border border-green-800";
      break;
    case "canceled":
      statusStyle = "bg-red-200 text-red-800 border border-red-800";
      break;
    default:
      statusStyle = "bg-blue-200 text-blue-800 border border-blue-800";
      break;
  }

 return (
  <div className={`rounded-full text-sm px-3 py-1 w-20 text-center ${statusStyle} ${className}`}>
    {status}
  </div>
 );}

export default StatusInfo;