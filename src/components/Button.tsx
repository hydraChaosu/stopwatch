type Props = {
  type: string;
  onClick: () => void;
  text: string;
};

import "./button.css";

export const Button = ({ type, onClick, text }: Props) => {
  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
};
