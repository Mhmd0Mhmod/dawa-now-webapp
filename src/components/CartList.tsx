import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem.tsx";
import { useState } from "react";
import { Medicine } from "@/types/Medicine.ts";
import { Button } from "@/components/ui/button.tsx";

function CartList({ className }: { className?: string }) {
  const [cart, setCart] = useState<Medicine[]>([
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
  ]);
  function clearCart() {
    // Clear the cart
    setCart([]);
  }
  return (
    <div className={`space-y-5 rounded-lg border shadow-md duration-100 hover:border-blue-450 ${className}`}>
      <h1 className={"text-center text-5xl"}>عربة التسوق</h1>
      <hr className={"border-t-2 border-black"} />
      {cart.length > 0 ? (
        <div className={"space-y-2 p-2"}>
          <div className={"mr-auto w-fit"}>
            <Button onClick={clearCart} variant={"outline"}>
              حذف الكل
            </Button>
          </div>
          <div className="max-h-96 space-y-2 overflow-auto">
            {cart.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className={"empty-cart flex h-96 items-center justify-center p-4"}>
          <Link to={"/home"} className={"block w-3/4 rounded-lg bg-sky-650 py-2 text-center text-2xl text-white"}>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartList;
