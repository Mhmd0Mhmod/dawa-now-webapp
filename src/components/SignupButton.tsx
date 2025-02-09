import { Button } from "./ui/button";
import Dialog from "@/Context/Dialog.tsx";
import Signup from "@/components/Signup.tsx";

function SignupButton() {
  return (
    <>
      <Dialog.Trigger name="signup">
        <Button variant={"ghost"} className="border border-black">
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
