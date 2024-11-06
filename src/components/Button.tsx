type Props = {
  className: string;
  onClick: () => void;
  text: string;
};

export const Button = ({ className, onClick, text }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
