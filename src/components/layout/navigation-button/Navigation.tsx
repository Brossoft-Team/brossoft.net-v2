import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const NavButton: React.FC<ButtonProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center text-textColor font-bold py-1 px-8 h-14 hover:text-slate-500 transition-all",
        className
      )}
      {...props}
    >
      <span className="mr-2">{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.5 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.793 8.5H2a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};

export default NavButton;
