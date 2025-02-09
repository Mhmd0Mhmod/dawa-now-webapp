import Dialog from "@/Context/Dialog";
import { Button } from "./ui/button";
import Login from "./Login.tsx";

function LoginButton() {
  return (
    <>
      <Dialog.Trigger name="login">
        <Button variant={"ghost"} className="border border-black">
          تسجيل الدخول
        </Button>
      </Dialog.Trigger>
      <Dialog.Content name="login">
        <Login />
      </Dialog.Content>
    </>
  );
}

export default LoginButton;
