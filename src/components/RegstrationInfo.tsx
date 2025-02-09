import LogoNotText from "/public/assets/logoNoText.svg?react";

function RegstrationInfo() {
 return (
   <div className="flex flex-col gap-5 items-center p-4 pt-20 text-white">
     <div className="flex items-center justify-center">
       <h1 className="text-shadow-white
           whitespace-nowrap font-k2d text-5xl font-extrabold text-shadow-sm">DawaNow</h1>
       <div className={"w-32"}>
         <LogoNotText className={"w-full"} />
       </div>
     </div>
     <p className={"font-bold"}> انضم إلى أكبر منصة تجمع الصيادلة، المستخدمين، وأصحاب الصيدليات والموزعين المعتمدين.</p>
     <p>
       أدخل بياناتك واستمتع بسهولة إدارة احتياجاتك الدوائية.
     </p>
   </div>

 );}

export default RegstrationInfo;