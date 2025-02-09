import { Button } from "@/components/ui/button.tsx";
import { IoEyeOffOutline } from "react-icons/io5";
function LoginForm() {
 return (
   <form className={"flex flex-col gap-5"}>
     <input type="text" placeholder="البريد الإلكتروني" className={"border-b-4 p-4 focus:outline-none"} />
     <div className={"relative "}>
       <input type="password" placeholder="كلمة المرور" className={"w-full border-b-4 p-4 focus:outline-none"} />
       <IoEyeOffOutline className={"absolute left-2 top-1/2 -translate-y-1/2 transform"} />
       <div className={"text-left mt-2"}>
         <span >نسيت كلمة المرور؟</span>
       </div>
     </div>
     <Button className={"mt-10 rounded-lg bg-sky-700 p-4 text-white"}>تسجيل الدخول</Button>
   </form>
 );}

export default LoginForm;