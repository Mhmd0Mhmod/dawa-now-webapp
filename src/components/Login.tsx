import LoginDoctor from "../../public/assets/loginDoctor.png";
import RegistrationProviders from "@/components/RegistrationProviders.tsx";
import RegistrationInfo from "@/components/RegstrationInfo.tsx";

import LoginForm from "@/components/LoginForm.tsx";

function Login() {
  return (
    <div className="relative grid min-h-[90vh] min-w-[1100px] grid-cols-3 gap-10 rounded-lg bg-blue-450">
      <div className={"absolute bottom-0 left-1/3 -ml-10 w-1/3 -translate-x-1/3"}>
        <img src={LoginDoctor} alt={"doctor image"} className={"w-full"} />
      </div>

      <div className={"col-span-2 rounded-e-3xl bg-white p-10 text-center text-gray-500"}>
        <div className={"m-auto flex h-full w-3/4 flex-col gap-10"}>
          <h1 className="text-6xl font-bold text-sky-700">تسجيل الدخول</h1>
          <div>
            <RegistrationProviders />
          </div>
          <p className={"text-4xl"}>- أو -</p>
          <div>
            <LoginForm/>
          </div>
        </div>
      </div>

      <RegistrationInfo />
    </div>
  );
}

export default Login;
