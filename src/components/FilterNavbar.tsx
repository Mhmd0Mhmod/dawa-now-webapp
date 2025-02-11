function FilterNavbar() {
  return (
    <nav className=" bg-blue-450 p-4 -mt-8 shadow-2xl">
      <ul className="flex flex-wrap justify-between  container m-auto text-2xl text-white ">
        <li>الرئيسية</li>
        <li>الأدوية والعلاج</li>
        <li>المكياج والإكسسوارات</li>
        <li>الفيتامينات والمكملات</li>
        <li>العناية الشخصية</li>
        <li>العناية بالبشرة</li>
        <li>العناية بالشعر</li>
      </ul>
    </nav>
  );
}

export default FilterNavbar;
