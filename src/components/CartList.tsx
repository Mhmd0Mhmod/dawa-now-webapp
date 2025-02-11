import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem.tsx";
import { useState } from "react";
import { CartItemType } from "@/types/CartItemType.ts";
import { Button } from "@/components/ui/button.tsx";

function CartList() {
  const [cart ,setCart]= useState<CartItemType[]>([
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
      stock: 10
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
      stock: 10
    }
  ]);
  function clearCart() {
    // Clear the cart
    setCart([]);
  }
  return (
    <div className={"rounded-lg border space-y-5"}>
      <h1 className={"text-center text-5xl"}>عربة التسوق</h1>
      <hr className={"border-t-2 border-black"} />
      {cart.length > 0 ? <div className={"space-y-2 max-h-96  p-2"}>
        <div className={"w-fit mr-auto"}>
          <Button onClick={clearCart} variant={"outline"}>حذف الكل</Button>
        </div>
        {cart.map((item, i) => <CartItem key={i} item={item} />)}
      </div> : <div className={"empty-cart h-96  p-4 flex items-center justify-center"}>
        <Link to={"/home"} className={"block text-center text-white py-2 w-3/4  rounded-lg text-2xl bg-sky-650"}>العودة
          للصفحة الرئيسية</Link>
      </div>}
    </div>
  );
}

export default CartList;
