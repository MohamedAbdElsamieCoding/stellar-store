import clsx from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = forwardRef<
  HTMLButtonElement,
  Props & ButtonHTMLAttributes<HTMLButtonElement>
>(({ text, onClick, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx(
        "bg-primary text-[#283500] text-[14px] tracking-tight",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
