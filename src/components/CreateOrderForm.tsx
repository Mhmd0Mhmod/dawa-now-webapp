import { RiCameraAiLine } from "react-icons/ri";
import { useState } from "react";

function CreateOrderForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={"space-y-5 rounded-lg border shadow-md duration-100 hover:border-blue-450"}>
      <h1 className={"text-center text-5xl"}>اكتب طلبك</h1>
      <hr className={"border-t-2 border-black"} />
      <form>
        <div className={"m-auto w-11/12 space-y-10 py-4"}>
          <div className={"relative"}>
            <textarea placeholder={"..."} className={"relative w-full resize-none rounded-xl border border-black px-4 py-2"} />
            <div className={"absolute bottom-2 left-2 text-gray-500"}>0 / 1000</div>
          </div>
          <div className={"flex items-center gap-2"}>
            <RiCameraAiLine />
            <p>صورة الروشتة أو ورقة الطلبات</p>
          </div>
          {selectedImage ? (
            <div className={"flex justify-center"}>
              <img src={selectedImage} alt={"Selected"} className={"h-auto max-w-full rounded-lg"} />
            </div>
          ) : (
            <div>
              <label htmlFor={"picture"} className={"block w-full rounded-xl border border-black px-4 py-2 text-center"}>
                اختر صورة
                <input type={"file"} id={"picture"} className={"hidden"} accept={"image/*"} onChange={handleImageChange} />
              </label>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateOrderForm;
