import { Link } from "react-router-dom";
import Dawa from "/public/assets/Dawa.png";

Logo.defaultProps = {
  center: false,
};

// function Logo({ center }: { center?: boolean }) {

function Logo({ className }: { className?: string }) {
  return (
    <Link to={"/"}>
      <div className={`w-56 md:flex md:items-center md:gap-12 ${className}`}>
        <img src={Dawa} className={"w-full"} alt={"dawa-now logo"} />
      </div>
    </Link>
  );
}

export default Logo;
