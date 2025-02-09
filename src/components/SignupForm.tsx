import { IoEyeOffOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";

function SignupForm() {
 return (
  <form className={"flex flex-col gap-1"}>
    <input type="text" placeholder="الاسم الكامل" className={"border-b-[3px] p-4 focus:outline-none"} />
    <input type="text" placeholder="البريد الإلكتروني" className={"border-b-[3px] p-4 focus:outline-none"} />
    <div className={"relative "}>
      <input type="password" placeholder="كلمة المرور" className={"w-full border-b-[3px] p-4 focus:outline-none"} />
      <IoEyeOffOutline className={"absolute left-2 top-1/2 -translate-y-1/2 transform"} />

    </div>
    <div className={"relative "}>
      <input type="password" placeholder="تأكيد كلمة المرور" className={"w-full border-b-[3px] p-4 focus:outline-none"} />
      <IoEyeOffOutline className={"absolute left-2 top-1/2 -translate-y-1/2 transform"} />
    </div>
    <select className={"border-b-[3px] p-4 focus:outline-none bg-transparent"}>
      <option > مستخدم</option>
      <option > مندوب</option>
      <option > صيدليه</option>
    </select>
    <Button className={"mt-10 rounded-lg bg-sky-700 p-4 text-white"}>
      انشاء حساب
    </Button>
  </form>
 );}

export default SignupForm;