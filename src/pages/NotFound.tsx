import { Button } from "@/components/ui/button";
import NotFoundSvg from "/public/assets/NotFound.svg?react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 direction-reverse">
      <div className="text-center">
        <NotFoundSvg />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Link to={"/"}>
          <Button className="mt-6 bg-blue-450">Go back home</Button>
        </Link>
      </div>
    </div>
  );
}
