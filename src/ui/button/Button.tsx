import { FC } from "react";
import scss from "./Button.module.scss";

interface IButton {
  title: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ title, onClick }) => {
  return (
    <div className={scss.btnBox}>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
