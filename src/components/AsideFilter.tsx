import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const filteItems = [
  { name: "الكل" },
  { name: "الأدوية والعلاج" },
  { name: "المكياج والإكسسوارات" },
  { name: "الفيتامينات والمكملات" },
  { name: "العناية الشخصية" },
  { name: "العناية بالبشرة" },
  { name: "العناية بالشعر" },
];
function AsideFilter() {
  const [active, setActive] = useState(0);
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div className="col-span-2 min-w-fit text-gray-500">
      <ul className="space-y-4">
        {filteItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer rounded-lg p-2 duration-200 hover:scale-100 hover:transform hover:bg-gray-100 hover:text-blue-450 ${active === index ? "bg-gray-100 text-blue-450" : ""}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AsideFilter;
