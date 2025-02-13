import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Cart from "./Cart";
import { useState } from "react";
export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const width = window.innerWidth;
  if (width < 1024) return null;

  return (
    <>
      <Button onClick={() => setIsOpen((open) => !open)} className="fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-450 text-yellow-400">
        <MdOutlineShoppingCartCheckout />
      </Button>

      {isOpen && createPortal(<Cart />, document.body)}
    </>
  );
}
