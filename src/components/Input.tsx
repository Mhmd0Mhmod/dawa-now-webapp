import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  removeIcon?: boolean;
};
function Input({ removeIcon, className, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const handleRemove = () => {
    setValue("");
  };
  return (
    <div className="relative m-auto w-8/12">
      <input
        className={`rounded-3xl border-2 border-gray-300 px-4 py-2 focus:border-blue-400 ${className}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...props}
      />
      {removeIcon && value && (
        <HiXMark
          onClick={handleRemove}
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
        />
      )}
    </div>
  );
}

export default Input;
