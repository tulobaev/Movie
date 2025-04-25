import { FC } from "react";
import scss from "./Button.module.scss";
interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <div className={scss.btnBox}>
      <button>{title}</button>
    </div>
  );
};

export default Button;
