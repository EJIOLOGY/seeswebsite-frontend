import React, { type InputHTMLAttributes, useState, type FC } from "react";
import { LockIcon, EyeIcon } from "@icons/index";
import { type InputError } from "@src/pages/auth/login";

export interface IPasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error?: boolean;
  errorObj: InputError;
}
// @Eddy-scion @Victor-Aken Note i extracted the type from the props below
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PasswordInput: FC<IPasswordInputProps> = ({
  type,
  error,
  errorObj,
  ...props
}) => {
  console.log(errorObj);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-full flex-col space-y-0.5">
      <div className="relative h-fit w-full select-none">
        <LockIcon className="absolute inset-y-3.5 left-5 h-auto w-4 my-auto" />
        <input
          type={showPassword ? "text" : "password"}
          {...props}
          placeholder="Password"
          className="text-bold w-full rounded-lg border-2 border-transparent bg-grey-600 py-3 pl-10 pr-12 font-sans text-xs text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
          data-true={error || errorObj?.error}
        />
        <EyeIcon
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-3.5 right-5 h-auto w-4 cursor-pointer fill-transparent transition-colors duration-300 ease-in hover:fill-gray-300 my-auto"
        />
      </div>
      {errorObj?.error && (
        <p className="text-xxs text-red-500">{errorObj?.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;