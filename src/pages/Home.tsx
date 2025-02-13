import CartButton from "@/components/CartButton.tsx";
import AsideFilter from "../components/AsideFilter.tsx";
import ProductsCards from "@/components/ProductsCards.tsx";
import { Separator } from "@/components/ui/separator.tsx";

const products = [
  {
    id: 1,
    name: "منتج 1",
    price: 100,
    quantity: 2,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 10,
  },
  {
    id: 2,
    name: "منتج 2",
    price: 200,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 3,
    name: "منتج 3",
    price: 300,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 4,
    name: "منتج 4",
    price: 400,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 5,
    name: "منتج 5",
    price: 500,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 6,
    name: "منتج 6",
    price: 600,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 7,
    name: "منتج 7",
    price: 700,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 8,
    name: "منتج 8",
    price: 800,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 9,
    name: "منتج 9",
    price: 900,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
  {
    id: 10,
    name: "منتج 10",
    price: 1000,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    description: "وصف المنتج",
    category: "الفئة",
    rating: 5,
    discount: 0,
    stock: 1,
  },
];
function Home() {
  return (
    <div className={"grid grid-cols-12 gap-4"}>
      <AsideFilter />
      <Separator orientation={"vertical"} className="bg-blue-450" />
      <ProductsCards products={products} />
      <CartButton />
    </div>
  );
}

export default Home;
