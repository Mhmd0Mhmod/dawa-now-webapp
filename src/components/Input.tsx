import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  removeIcon?: boolean;
  Icon?: React.FC;
};

function Input({ removeIcon, Icon, className, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const handleRemove = () => {
    setValue("");
  };
  return (
    <div className={`relative ${removeIcon ? "pr-10" : ""} ${className}` }>
      <input
        className={`rounded-3xl border-2 border-gray-300 px-4 py-2 focus:border-blue-400 ${Icon ? "pr-10" : ""}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...props}
      />
      {Icon && (
        <div className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400">
          <Icon />
        </div>
      )}
      {removeIcon && value && <HiXMark onClick={handleRemove} className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />}
    </div>
  );
}

export default Input;
