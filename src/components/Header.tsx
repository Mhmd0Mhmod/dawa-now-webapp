import Logo from "./Logo";
import NavLinks from "@/components/NavLinks.tsx";
import RegistrationButtons from "@/components/RegistrationButtons.tsx";
import { PiListThin } from "react-icons/pi";
import { Button } from "@/components/ui/button.tsx";

function Header() {
  return (
    <>
      <header className={"pb-2 shadow-sm"}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <NavLinks />
            <RegistrationButtons>
              <div className="block md:hidden">
                <Button variant={"ghost"}>
                  <PiListThin />
                </Button>
              </div>
            </RegistrationButtons>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
