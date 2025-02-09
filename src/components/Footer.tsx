import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import AppStore from "/public/assets/appstore.svg?react";
import GooglePlay from "/public/assets/googleplay.svg?react";
function Footer() {
  return (
    <div className="bg-blue-1000 text-white">
      <div className="container m-auto grid grid-cols-2 grid-rows-[1fr_auto] items-center justify-items-center gap-5 p-5">
        <div className="flex w-full justify-between gap-2">
          <Link to={""}>اقرب الصيدليات</Link>
          <Separator className="h-5" orientation="vertical" />
          <Link to={""}>من نحن</Link>
          <Separator className="h-5" orientation="vertical" />
          <Link to={""}>انضم الينا</Link>
          <Separator className="h-5" orientation="vertical" />
          <Link to={""}>تواصل معنا</Link>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>استمتع بتطبيق DawoNow</p>
          <div className="flex gap-5">
            <AppStore />
            <GooglePlay />
          </div>
        </div>
        <div className="col-span-2 h-fit">
          <p>
            جميع الحقوق محفوظة{" "}
            <span className="text-blue-500">&copy;2025 Dawonow </span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
