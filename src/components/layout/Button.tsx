import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  const base = "px-4 py-2 rounded font-semibold ";
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-[#0b1444] text-white hover:bg-blue-700";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
