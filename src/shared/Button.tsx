interface Props {
  text: string;
  onClick: () => void;
}
const Button = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-[#283500] py-4 text-[14px] tracking-tight"
    >
      {text}
    </button>
  );
};

export default Button;
