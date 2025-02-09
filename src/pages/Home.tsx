import ProductsCarousel from "@/components/ProductsCarousel";
import CartTitle from "../components/CartTitle";
import FilterNavbar from "../components/FilterNavbar";
import Input from "../components/Input";

function Home() {
  return (
    <>
      <FilterNavbar />
      <div className="container m-auto my-10 space-y-20 px-10">
        <section className="space-y-10">
          <CartTitle />
          <Input
            className="m-auto min-w-full text-2xl"
            removeIcon
            placeholder={"البحث عن منتج..."}
          />
        </section>
        <section className="space-y-10">
          <ProductsCarousel />
          <ProductsCarousel />
        </section>
      </div>
    </>
  );
}

export default Home;
