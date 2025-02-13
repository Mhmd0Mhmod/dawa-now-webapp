const filteItems = [
  { name: "الرئيسية" },
  { name: "الأدوية والعلاج" },
  { name: "المكياج والإكسسوارات" },
  { name: "الفيتامينات والمكملات" },
  { name: "العناية الشخصية" },
  { name: "العناية بالبشرة" },
  { name: "العناية بالشعر" },
];
function AsideFilter() {
  return (
    <div className="col-span-2 min-w-fit text-gray-500">
      <ul className="space-y-4">
        {filteItems.map((item, index) => (
          <li key={index} className="hove:transform cursor-pointer duration-200 hover:scale-100 hover:text-blue-450">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AsideFilter;
