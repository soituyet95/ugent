import type { ButtonHTMLAttributes } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ type = "button", ...props }: ButtonProps) {
  return (
    <button
      className="cug-button"
      type={type}
      {...props}
    />
  );
}
