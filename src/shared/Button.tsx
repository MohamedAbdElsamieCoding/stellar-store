import clsx from "clsx";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}
const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-primary text-[#283500] text-[14px] tracking-tight",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
