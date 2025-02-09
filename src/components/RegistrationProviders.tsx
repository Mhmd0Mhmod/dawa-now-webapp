import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button.tsx";

function RegistrationProviders() {
  return (
    <div className={"flex justify-center gap-4"}>
      <Button variant={"outline"} className={"shadow-lg"}>
        <FaFacebook className={"text-blue-800"} />
        <h2>الاستمرار بحساب فيسبوك</h2>
      </Button>
      <Button variant={"outline"} className={"shadow-lg"}>
        <FcGoogle />
        <h2>الاستمرار بحساب فيسبوك</h2>
      </Button>
    </div>
  );
}

export default RegistrationProviders;
