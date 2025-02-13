import { Button } from "./ui/button";
import Dialog from "@/Context/Dialog.tsx";
import Signup from "@/components/Signup.tsx";

function SignupButton() {
  return (
    <>
      <Dialog.Trigger name="signup">
        <Button variant={"ghost"} className="border border-black hover:text-blue-450 hover:border-blue-450 sm:block hidden">
          انشاء حساب
        </Button>
      </Dialog.Trigger>
      <Dialog.Content  name="signup">
        <Signup />
      </Dialog.Content>
    </>
  );
}

export default SignupButton;
