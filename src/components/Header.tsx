import Dialog from "@/Context/Dialog";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SignupButton from "./SignupButton";

function Header() {
  return (
    <div className="cont bg-blue-450 px-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center">
          <Logo center />
        </div>
        <Dialog>
          <div className="flex gap-5">
            <LoginButton />
            <span className="w-px flex-1 bg-black" />
            <SignupButton />
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
