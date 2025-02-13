import Dialog from "@/Context/Dialog.tsx";
import LoginButton from "@/components/LoginButton.tsx";
import SignupButton from "@/components/SignupButton.tsx";

function RegistrationButtons({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <div className="flex items-center gap-5">
        <div className="sm:flex sm:gap-4">
          <LoginButton />
          <SignupButton />
        </div>
        {children}
      </div>
    </Dialog>
  );
}

export default RegistrationButtons;
